import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  //Tells Angular 17 to navigate the login path if the user is not logged in.
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
