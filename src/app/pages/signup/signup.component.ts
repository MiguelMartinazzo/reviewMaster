import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  //Inject the authentication and router services
  authService = inject(AuthService);
  router = inject(Router);

  //Reactive form for signing up users
  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    terms: new FormControl(false, [Validators.requiredTrue])
  })

  // Variable to store error message
  public errorMessage: string | null = null;

  // Getters for form controls
  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get terms() {
    return this.signupForm.get('terms');
  }

  //When Submit Method
  public onSubmit() {
    console.log('Form Status:', this.signupForm.status);
    console.log('Terms Control Status:', this.terms?.status);
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
            this.errorMessage = error.error.message; // Store the error message
          }
        });
    } else {
      // Alert user about the required fields if he tries
      // to submit without even touching any field
      alert('Name, Email, Password and Terms are required.');
    }
  }
}