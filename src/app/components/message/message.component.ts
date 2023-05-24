import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  text: string | undefined;
  class = "";
  error = false;
  warning = false;
  notify = false;
  success = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.text = data.data.text;
    this.switchClass(data);

  }

  switchClass(data: any) {
    this.error = false;
    this.warning = false;
    this.notify = false;
    this.success = false;
    switch (data.data.class) {
      case 'warning': this.warning = true; break;
      case 'notify': this.notify = true; break;
      case 'success': this.success = true; break;
      case 'error':
      default: this.error = true; break;
    }
    this.class = data.data.class;
  }
}
