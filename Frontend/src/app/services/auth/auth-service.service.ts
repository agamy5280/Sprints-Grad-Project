import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  userData = JSON.parse(localStorage.getItem('userData') || '{}');
  private isRefreshing = false;
  constructor(private http: HttpClient, private _router: Router) {}

  async LoginRequest(LoginInfo: object) {
    console.log(LoginInfo);
    return this.http.post(`${environment.apiURL}user/login`, LoginInfo, {
      headers: { 'Skip-Interceptor': 'true' },
    });
  }

  async registerRequest(registerInfo: object) {
    return this.http.post(`${environment.apiURL}user/register`, registerInfo, {
      headers: { 'Skip-Interceptor': 'true' },
    });
  }

  async resetPasswordRequest(email: object) {
    return this.http.post(
      `${environment.apiURL}user/resetpasswordrequest`,
      email,
      { headers: { 'Skip-Interceptor': 'true' } }
    );
  }
  async resetPassword(password: string, token: string) {
    const body = { password: password, token: token };
    return this.http.post(`${environment.apiURL}user/resetpassword`, body, {
      headers: { 'Skip-Interceptor': 'true' },
    });
  }

  async refreshTokenRequest(refreshToken: string) {
    const body = { refresh_token: refreshToken };
    return this.http.post(`${environment.apiURL}user/refresh`, body);
  }

  async getToken() {
    let accessToken = this.userData.access_token;
    let accessTokenExpiration = new Date(
      this.userData.access_token_expiration
    ).getTime();
    let refreshToken = this.userData.refresh_token;
    let refreshTokenExpiration = new Date(
      this.userData.data['refresh_token_expiration']
    ).getTime();
    // Check if the access token has expired
    if (Date.now() >= accessTokenExpiration) {
      if (Date.now() <= refreshTokenExpiration) {
        try {
          if (!this.isRefreshing) {
            this.isRefreshing = true;
            await (await this.refreshTokenRequest(refreshToken))
              .toPromise()
              .then((res: any) => {
                this.userData.access_token = res.access_token;
                this.userData.access_token_expiration =
                  res.access_token_expiration;
                accessTokenExpiration = new Date(
                  res.access_token_expiration
                ).getTime();
                accessToken = res.access_token;
                this.userData.refresh_token = res.refresh_token;
                this.userData.data.refresh_token = res.refresh_token;
                this.userData.data.refresh_token_expiration =
                  res.refresh_token_expiration;
                localStorage.setItem('userData', JSON.stringify(this.userData));
              });
          }
        } catch (err) {
          console.error('Error refreshing token:', err);
          return null;
        } finally {
          this.isRefreshing = false;
        }
      } else {
        console.log('Refresh token has expired');
        this.logout();
        return null;
      }
    }

    return accessToken;
  }

  async logout() {
    try {
      await this.http
        .get(`${environment.apiURL}user/logout/${this.userData.data.id}`)
        .toPromise();
      alert('User has logged out');
      localStorage.removeItem('userData');
      this._router.navigate(['home']).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  }
}
