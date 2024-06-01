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
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { SocialmediaComponent } from './pages/socialmedia/socialmedia.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
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
    MatDialogModule,
    MatDividerModule,
    MatGridListModule
    
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
