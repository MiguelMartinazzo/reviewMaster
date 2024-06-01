import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewForumComponent } from './modal-view-forum/modal-view-forum.component';



@Component({
  selector: 'app-crudForum',
  templateUrl: './crudForum.component.html',
  styleUrl: './crudForum.component.scss'
})
export class CrudForumComponent {
  constructor(
    public dialog: MatDialog
  ){}

  openDialog() {
    const dialogRef = this.dialog.open(ModalViewForumComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('fechado');
    });
  }

  titulo = 'Um dos melhores?'
  user = `Sidnei Goes`;
  jogo = 'God of War Ragnarok'



}
