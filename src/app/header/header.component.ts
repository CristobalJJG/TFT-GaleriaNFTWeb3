import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  language: string;

  constructor(protected translate: TranslateService) {
    this.language = (localStorage.getItem('language') || 'es');
  }

  changeLanguage(lang: string){
    localStorage.setItem('language', lang)
    window.location.reload();
  }
}
