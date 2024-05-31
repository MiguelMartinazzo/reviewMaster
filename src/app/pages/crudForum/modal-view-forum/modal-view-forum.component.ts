import { Component, Inject } from '@angular/core';
import { Discussao } from '../../../models/discussao';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-view-forum',
  templateUrl: './modal-view-forum.component.html',
  styleUrl: './modal-view-forum.component.scss'
})
export class ModalViewForumComponent {
  discussaoData: Discussao;


  constructor(public dialogRef: MatDialogRef<ModalViewForumComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('Data recebida', data);
    this.discussaoData = data;
  }

  closeModal() { this.dialogRef.close(); }
}
