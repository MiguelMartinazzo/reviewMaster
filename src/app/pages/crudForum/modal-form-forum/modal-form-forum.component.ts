import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-forum',
  templateUrl: './modal-form-forum.component.html',
  styleUrl: './modal-form-forum.component.scss'
})
export class ModalFormForumComponent {
  formForum !: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalFormForumComponent>,   
    private formBuilder: FormBuilder
  ) { 

    }

    ngOnInit() {  
      this.buildForm();
    }

    buildForm() {
      this.formForum = this.formBuilder.group({
        name: [null, [Validators.required ]],
        game: [null, [Validators.required ]],
        title: [null, [Validators.required, Validators.maxLength(20)]],
        content: [null, [Validators.required]],
        
      });
  

    }
  }
