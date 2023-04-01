import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../home-page.component.scss', '../login-register.component.scss']
})
export class LoginComponent {

  mail: string | undefined;
  pass: string | undefined;

  constructor(protected auth: AuthService){

  }

  /* Para evitar "inyecciones" */
  onLogin(): void{
    if((this.mail && this.mail.trim() != " ".trim()) &&   // Si existe correo y no es vacío
        (this.pass && this.pass?.length >= 6 &&           // Si existe contraseña y es mayor a 6 dígitos
          this.pass.match('[A-Za-z0-9.]{6,}'))) {    // Si la contraseña tiene algún caracter no permitido
            this.auth.logInEmailPass(this.mail, this.pass)
          }       
  }
}
