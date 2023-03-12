import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  userData = JSON.parse(localStorage.getItem('userData') || '{}');
  constructor(public router: Router, public userService: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if(this.userData){
        if(this.userData.data.isAdmin) {
          return true
        } else {
          return this.router.navigate(['NotAuthorized'])
        }
      }else {
        this.router.navigate(['login'])
        return false
      }
    
  }
  }
