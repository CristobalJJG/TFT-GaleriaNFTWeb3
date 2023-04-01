import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User
} from 'firebase/auth';


import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | null = null;

  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);

  auth = getAuth(this.app);
  constructor() {}

  getCurrentUser(): User | null{
    console.log(this.auth.currentUser);
    return this.auth.currentUser;
  }

  async logInEmailPass(mail: string, pass: string) {
    await signInWithEmailAndPassword(this.auth, mail, pass)
      .catch((error) => { console.error(error.code); });
  }

  async registerEmailPass(mail: string, pass: string) {
    await createUserWithEmailAndPassword(this.auth, mail, pass)
      .catch((error) => { console.log(error.code); });
  }

  async enterWithGoogle() {
    let provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    await signInWithPopup(this.auth, provider)
  }
}