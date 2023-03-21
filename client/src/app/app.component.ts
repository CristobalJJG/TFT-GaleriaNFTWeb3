import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'front';
  language: string;

  constructor(protected translate: TranslateService) {
    this.language = (localStorage.getItem('language') || 'es');
    translate.setDefaultLang(this.language);
    translate.use(this.language);
  }
}
