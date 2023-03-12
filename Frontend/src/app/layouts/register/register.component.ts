import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthServiceService, private _router: Router) {}
  errorMsg: string = '';
  registerForm = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]),
    lname: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')]),
    national_Id: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14), Validators.pattern('[0-9]+')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  async register() {
    (await this.authService.registerRequest(this.registerForm.value)).subscribe({
      next: (res) => console.log(res),
      error: (err) => this.errorMsg = err.error,
      complete: () => {alert("Registration Successful!"), this._router.navigate(['login']);}
    })
  }
}
