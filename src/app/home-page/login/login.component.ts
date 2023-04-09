import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { FirestoreService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../home-page.component.scss', 
    '../login-register.component.scss', 
    '../login-register-validations.scss']
})
export class LoginComponent {

  constructor(protected auth: AuthService, protected db: FirestoreService){

  }

  /* Para evitar "inyecciones" */
  async onLogin(login: any){
    if(login.mail.valid && login.pass.valid){
      console.log("se manda", login.mail.value, login.pass.value);

    }

    //console.log("se manda", login.mail.value, login.pass.value);
    
    /* 
    if((this.mail && this.mail.trim() != " ".trim()) &&   // Si existe correo y no es vacío
        (this.pass && this.pass?.length >= 6 &&           // Si existe contraseña y es mayor a 6 dígitos
          this.pass.match('[A-Za-z0-9.]{6,}'))) {    // Si la contraseña tiene algún caracter no permitido
            this.auth.logInEmailPass(this.mail, this.pass)
          } */
  }
}
