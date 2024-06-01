import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, provideHttpClient } from '@angular/common/http'; //Fix later
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
//import { HomeCrudComponent } from './pages/home-crud/home-crud.component'; 
import {MatIconModule} from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { CrudForumComponent } from './pages/crudForum/crudForum.component';
import { ModalFormForumComponent } from './pages/crudForum/modal-form-forum/modal-form-forum.component';
import { ModalViewForumComponent } from './pages/crudForum/modal-view-forum/modal-view-forum.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { SocialmediaComponent } from './pages/socialmedia/socialmedia.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //HomeCrudComponent
    AppComponent,
    MenuComponent,
    CrudForumComponent,
    ModalFormForumComponent,
    ModalViewForumComponent,
    SocialmediaComponent   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule //fix later
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule
    
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
