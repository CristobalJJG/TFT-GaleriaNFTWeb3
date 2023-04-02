import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User
} from 'firebase/auth';


import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | null = null;

  app = initializeApp(environment.firebaseConfig);

  auth = getAuth(this.app);
  constructor() {}

  getCurrentUser(): User | null{
    console.log(this.auth.currentUser);
    return this.auth.currentUser;
  }

  async logInEmailPass(mail: string, pass: string) {
    await signInWithEmailAndPassword(this.auth, mail, pass)
      .then((data) => {
        if(data.user.email != null)
          localStorage.setItem("userInfo", data.user.email);
        window.location.reload();
      })
      .catch((error) => { console.error(error.code); });
  }

  async registerEmailPass(mail: string, pass: string) {
    await createUserWithEmailAndPassword(this.auth, mail, pass)
    .then((data) => {
      if(data.user.email != null)
        localStorage.setItem("userInfo", data.user.email);
      window.location.reload();
    })
    .catch((error) => { console.log(error.code); });
  }

  async enterWithGoogle() {
    let provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    await signInWithPopup(this.auth, provider)
  }

  async logOut(){
    await signOut(this.auth);
    localStorage.removeItem('userInfo');
  }
}