import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth/auth.guard';
import { CrudForumComponent } from './pages/crudForum/crudForum.component';
import path from 'path';
import { SocialmediaComponent } from './pages/socialmedia/socialmedia.component';

const routes: Routes = [
  //Variables that contains all functions for login page
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'forum', component: CrudForumComponent
  },
  {
    path: 'socialmedia', component: SocialmediaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },

  {
    path: 'admin', component: AdminComponent, canActivate: [authGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

