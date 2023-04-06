import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login-register.component.scss', '../home-page.component.scss']
})
export class RegisterComponent {

  /* Componentes del formulario */
  mail: string | undefined;
  name: string | undefined;
  pass: string | undefined;
  rpass: string | undefined;

  /* Lista de posibles errores */
  flagError: boolean = false;
  msgError: string = "";

  constructor(protected auth: AuthService,
    protected router: Router){

  }

  /* Para evitar "inyecciones" */
  async onRegister(){
    
    if((this.mail && this.mail.trim() != " ".trim()) &&   // Si existe correo y no es vacío
        (this.pass && this.pass?.length >= 6 &&           // Si existe contraseña y es mayor a 6 dígitos
          this.pass.match('[A-Za-z0-9.]{6,}')) &&
          (this.name != undefined)){    // Si la contraseña tiene algún caracter no permitido
            this.auth.registerEmailPass(this.mail, this.name, this.pass)
          }
  }

  errorManage(err:string){
    switch(err){
      case '0': 
      case '1': 
      case '2': 
      case '3': 
      case '4': 
      case '5':
      default: this.msgError = "Hubo un error al registrarse." 
    }
  }
}
