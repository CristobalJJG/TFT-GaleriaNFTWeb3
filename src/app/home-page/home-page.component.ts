import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private modal: ModalService) { }

  openLogin() {
    this.modal.openDialog(LoginComponent, "450px", "500px");
  }
  openRegister() {
    this.modal.openDialog(RegisterComponent, "625px", "500px");
  }
}
