import { MatConfirmDialogComponent } from './../mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog : MatDialog) { }

  OpenConfirmationDialog(msg){
      return this.dialog.open(MatConfirmDialogComponent,{
         width: '390px',
         panelClass: 'confirm-dialog-container',
         disableClose: true,
         position: { top: "90px" },
         data :{
           message : msg
         }
       });
     }
}