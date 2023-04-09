import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  translateError(e: string): string{
    switch(localStorage.getItem('language')){
      case 'es': return this.searchEs(e);
      case 'en': return this.searchEn(e);
      default: return "Hubo un error en la página, lo intentaremos solucionar lo antes posible"

    }
  }

  private searchEn(e:string){
    switch(e){
      case "auth/user-not-found": return "It doesn't exists a user with that email.";
      case "auth/wrong-password": return "The password or the email might be bad.";
      default: console.log(e);
        return "Error trying to Login In.";
    }
  }
  private searchEs(e:string){
    switch(e){
      case "auth/user-not-found": return "No existe un usuario con este correo.";
      case "auth/wrong-password": return "El correo o la contraseña pueden estar mal.";
      default: console.log(e);
        return "Error intentado iniciar sesión.";
    }
  }
}


