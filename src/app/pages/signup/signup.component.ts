import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  
  //Inject the authentication and router services
  authService  =  inject(AuthService);
  router  =  inject(Router);

  //Reactive form for signing up users
  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  //When Submit Method
  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err) => console.log(err)
        });
    }else {
      // Alert user about the required fields
      alert('Name, Email and Password are required.');
    }
  }
}