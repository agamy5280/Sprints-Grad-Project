import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthServiceService, private _router: Router){}
  errorMsg: string = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  async login() {
     (await this.authService.LoginRequest(this.loginForm.value)).subscribe({
      next: (res) => {
        localStorage.setItem('userData', JSON.stringify(res));
      },
      error: (err) => this.errorMsg = err.error,
      complete: () => {alert("Login Successful!"), this._router.navigate(['home']).then(() => {
        window.location.reload()
      });}
     })
  }
}
