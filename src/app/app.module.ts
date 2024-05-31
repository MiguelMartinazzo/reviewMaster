import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { CrudForumComponent } from './pages/crudForum/crudForum.component';
import { ModalFormForumComponent } from './pages/crudForum/modal-form-forum/modal-form-forum.component';
import { ModalViewForumComponent } from './pages/crudForum/modal-view-forum/modal-view-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CrudForumComponent,
    ModalFormForumComponent,
    ModalViewForumComponent   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
