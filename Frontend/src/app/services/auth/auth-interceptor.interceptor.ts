import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable, from, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has('Skip-Interceptor')) {
      // Skip the interceptor
      return next.handle(request);
    }
    let retryCount = 0;
    return from(this.authService.getToken()).pipe(
      switchMap((newAccessToken) => {
        if (newAccessToken) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${newAccessToken}`
            }
          });
        }
        return next.handle(request).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              if (retryCount < 3) {
                retryCount++;
                return from(this.authService.getToken()).pipe(
                  switchMap((newAccessToken) => {
                    if (newAccessToken) {
                      request = request.clone({
                        setHeaders: {
                          Authorization: `Bearer ${newAccessToken}`
                        }
                      });
                      return next.handle(request).pipe(retry(1)); // retry the request after the token has been refreshed
                    } else {
                      return throwError(error);
                    }
                  })
                );
              } else {
                this.authService.logout();
                return throwError(error);
              }
            } else {
              return throwError(error);
            }
          })
        );
      })
    );
  }

}
