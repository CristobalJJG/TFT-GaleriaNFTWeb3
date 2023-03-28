import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'front';

  constructor(protected translate: TranslateService) {
    let language = (localStorage.getItem('language') || 'es');
    translate.setDefaultLang(language);
    translate.use(language);
  }
}
