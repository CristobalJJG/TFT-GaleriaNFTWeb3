import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth-service.service';
import { User } from '../class/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  language: string;
  user: User | undefined;
  constructor(protected translate: TranslateService,
    protected auth: AuthService) {
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
}
