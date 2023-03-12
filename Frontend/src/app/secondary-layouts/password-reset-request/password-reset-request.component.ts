import { Component, OnInit  } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.scss']
})
export class PasswordResetRequestComponent implements OnInit {
  resetToken: string = '';
  password: string = '';
  errorMsg: string = '';
  confirmMsg: string = '';
  constructor(private authService: AuthServiceService, private _router: Router, private activatedRoute: ActivatedRoute){}
  ngOnInit() {
    this.resetToken = this.activatedRoute.snapshot.queryParams['token'];
    this.changePasswordForm.get('confirmPassword')?.setValidators(this.passwordMatchValidator());
  }
  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  changePasswordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.minLength(8), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(8), Validators.required])
  });
  async sendPasswordResetRequest() {
    (await this.authService.resetPasswordRequest(this.resetForm.value)).subscribe({
      next: (res) => {this.confirmMsg = "A reset link has been sent your email"},
      error: (err) => {this.errorMsg = err.error},
      complete: () => {}
    })
  }
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const newPassword = this.changePasswordForm.get('newPassword')!.value;
      const confirmPassword = this.changePasswordForm.get('confirmPassword')!.value;
      if (newPassword !== confirmPassword) {
        return { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }
  async changePassword() {
    this.password = this.changePasswordForm.value['confirmPassword'] || '';
    (await this.authService.resetPassword(this.password, this.resetToken)).subscribe({
      next: (res) => {},
      error: (err) => {this.errorMsg = err.error},
      complete: () => {alert("Reset Password Successful!"), this._router.navigate(['login']);}
    })
  }
}
