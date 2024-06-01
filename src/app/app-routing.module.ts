import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ForumComponent } from './pages/forum/forum.component';
import { HomeComponent } from './pages/home/home.component';
//import { HomeCrudComponent } from './pages/homeCrud/homeCrud.component';
import { authGuard } from './auth/auth.guard';



const routes: Routes = [
  //Variables that contains all functions for login page
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
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

  {
    path: 'forum', component: ForumComponent, canActivate: [authGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [authGuard]
  },
  /*{
    path: 'homeCrud', component: HomeCrudComponent, canActivate: [authGuard]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

