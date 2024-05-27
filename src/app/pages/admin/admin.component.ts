import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  //Inject the authentication and router services
  authService = inject(AuthService);
  router = inject(Router);
  //Logout method implementation
  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}