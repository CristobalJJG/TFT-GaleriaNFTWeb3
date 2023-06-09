import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword, getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';


import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { FirestoreService } from './firestore-service.service';
import { User } from '../class/user';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | null = null;

  public static app = initializeApp(environment.firebaseConfig);

  auth = getAuth(AuthService.app);
  constructor(protected db: FirestoreService, private snack: SnackbarService) { }

  getLocalUser(): User | undefined {
    let aux = localStorage.getItem("userData");
    if (aux) return User.fromJSONtoUser(JSON.parse(aux));
    return undefined;
  }

  async logInEmailPass(mail: string, pass: string): Promise<string> {
    return await signInWithEmailAndPassword(this.auth, mail, pass)
      .then((data) => {
        if (data.user.email != null) {
          this.db.getUserInfo(mail);
        }
        this.snack.openSnackBar("Inicio de Sesión correcto");
        setTimeout(function () { window.location.reload(); }, 1000);
        return "";
      })
      .catch((error) => { return error.code; });
  }

  async registerEmailPass(mail: string, name: string, pass: string): Promise<string> {
    return await createUserWithEmailAndPassword(this.auth, mail, pass)
      .then((data) => {
        if (data.user.email != null) {
          this.db.addUser(mail, name.trim());
          this.db.getUserInfo(mail);

        }
        this.snack.openSnackBar("Registro correcto");
        setTimeout(function () { window.location.reload(); }, 1000);
        return "";
      })
      .catch((error) => { return error.code; });
  }

  async logOut() {
    await signOut(this.auth);
    localStorage.clear();
    this.snack.openSnackBar("Cierre de sesión correcto");
  }
}