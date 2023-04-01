import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth-service.service';
import { User } from 'firebase/auth';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  language: string;
  user: User | null | undefined;
  constructor(protected translate: TranslateService, 
    protected auth: AuthService) {
      this.user = auth.getCurrentUser()
      if(this.user != null) this.user = undefined;
      console.log(this.user);
      
      this.language = (localStorage.getItem('language') || 'es');
  }

  changeLanguage(lang: string){
    localStorage.setItem('language', lang)
    window.location.reload();
  }
}
