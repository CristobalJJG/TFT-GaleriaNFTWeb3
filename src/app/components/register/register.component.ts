import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { ErrorService } from 'src/app/services/error-service.service';
import { ModalService } from 'src/app/services/modal.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login-register.component.scss',
    '../login-register-validations.scss']
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
    protected router: Router,
    protected error: ErrorService,
    private modal: ModalService) {

  }

  /* Para evitar "inyecciones" */
  async onRegister(register: any) {
    let result;
    if (register.mail.valid && register.pass.valid && register.name.valid)
      result = this.auth.registerEmailPass(register.mail.value, register.name.value, register.pass.value)

    result?.then(msg => {
      if (msg == "") this.msgError = "";
      else this.msgError = this.error.translateError(msg)
    })
  }

  goToLogin() {
    this.modal.closeDialog()
    this.modal.openDialog(LoginComponent, "450px", "500px");
  }
}
