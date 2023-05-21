import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth-service.service';
import { User } from '../class/user';
import { ModalService } from '../services/modal.service';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  language: string;
  user: User | undefined;
  constructor(protected translate: TranslateService,
    protected auth: AuthService,
    private modal: ModalService) {
    this.user = User.getUserFromData();
    this.language = (localStorage.getItem('language') || 'es');
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang)
    window.location.reload();
  }

  onLogout() {
    this.auth.logOut();
    window.location.reload();
  }

  openLogin() {
    this.modal.openDialog(LoginComponent, "450px", "500px");
  }
  openRegister() {
    this.modal.openDialog(RegisterComponent, "625px", "500px");
  }
}
