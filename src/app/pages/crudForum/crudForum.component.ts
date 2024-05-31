import { Component, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Discussao } from '../../models/discussao';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../auth/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { ModalViewForumComponent } from './modal-view-forum/modal-view-forum.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-crudForum',
  templateUrl: './crudForum.component.html',
  styleUrl: './crudForum.component.scss'
})
export class CrudForumComponent {
  displayedColumns: string[] = ['id', 'name', 'game', 'titulo', 'comentario'];
  dataSource: any;
  listDiscuss: Discussao[] = [];

  constructor(private forumservice: AuthService, public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource<Discussao>(this.listDiscuss);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  

  
  openModalViewMateria() {
    this.dialog.open(ModalViewForumComponent, {
      width: '700px',
      height: '350px',
      //data: discussao
    })
  }

  } 
