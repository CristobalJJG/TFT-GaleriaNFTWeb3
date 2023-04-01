import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  translateError(e: string): string{
    switch(e){
      case "auth/user-not-found": return "No existe un usuario con este correo.";
      case "auth/wrong-password": return "Fallo en la contraseña.";
      default: return "error";
    }
  }
}

