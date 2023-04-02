import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login-register.component.scss', '../home-page.component.scss']
})
export class RegisterComponent {
  mail: string | undefined;
  name: string | undefined;
  pass: string | undefined;
  rpass: string | undefined;

  constructor(protected auth: AuthService,
    protected router: Router){

  }

  /* Para evitar "inyecciones" */
  async onRegister(){
    if((this.mail && this.mail.trim() != " ".trim()) &&   // Si existe correo y no es vacío
        (this.pass && this.pass?.length >= 6 &&           // Si existe contraseña y es mayor a 6 dígitos
          this.pass.match('[A-Za-z0-9.]{6,}'))) {    // Si la contraseña tiene algún caracter no permitido
            this.auth.registerEmailPass(this.mail, this.pass)
          }

    if(this.auth.getCurrentUser())
      this.router.navigate(['/login'])
  }
}
