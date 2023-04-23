import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(protected dialog: MatDialog) { }

  openDialog(component: any, data?: any) {
    this.dialog.open(component, {
      data: data
    });
  }
}
