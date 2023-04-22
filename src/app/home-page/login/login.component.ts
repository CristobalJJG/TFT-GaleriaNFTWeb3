import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { ErrorService } from 'src/app/services/error-service.service';
import { FirestoreService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../home-page.component.scss', 
    '../login-register.component.scss', 
    '../login-register-validations.scss']
})
export class LoginComponent {

  msgError: string = "";

  constructor(protected auth: AuthService, protected db: FirestoreService,
    protected error: ErrorService){

  }

  /* Para evitar "inyecciones" */
  async onLogin(login: any){
    let result;
    if(login.mail.valid && login.pass.valid)
      result = this.auth.logInEmailPass(login.mail.value, login.pass.value)
    
    result?.then(msg => {
      if(msg == "") this.msgError = "";
      else this.msgError = this.error.translateError(msg)
    })
  }
}
