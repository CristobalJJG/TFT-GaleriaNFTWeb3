import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  translateError(e: string): string {
    switch (localStorage.getItem('language') ?? 'es') {
      case 'es': return this.searchEs(e);
      case 'en': return this.searchEn(e);
      default: return "Hubo un error en la página, lo intentaremos solucionar lo antes posible"

    }
  }

  private searchEn(e: string) {
    switch (e) {
      case "auth/user-not-found": return "It doesn't exists an account with that email.";
      case "auth/wrong-password": return "The password or the email might be bad.";
      case "auth/email-already-in-use": return "It already exists an account with this email.";
      default: console.log(e);
        return "Error trying to Login In.";
    }
  }
  private searchEs(e: string) {
    switch (e) {
      case "auth/user-not-found": return "No existe una cuenta con este correo.";
      case "auth/wrong-password": return "El correo o la contraseña pueden estar mal.";
      case "auth/email-already-in-use": return "Ya existe una cuenta con este correo.";
      default: console.log(e);
        return "Error intentado iniciar sesión.";
    }
  }
}


