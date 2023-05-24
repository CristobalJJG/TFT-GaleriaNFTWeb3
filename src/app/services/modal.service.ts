import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(protected dialog: MatDialog) { }

  openDialog(component: any, heigh?: string, width?: string, data?: any) {
    this.dialog.open(component, {
      height: heigh,
      width: width,
      data
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
