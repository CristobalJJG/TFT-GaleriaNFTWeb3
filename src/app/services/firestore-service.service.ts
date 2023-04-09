import { Injectable } from '@angular/core';
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db = getFirestore(AuthService.app);
  constructor() {

  }

  async addUser(mail: string, fullname: string){
    let username = mail.split("@")[0]
    
    let name = "";
    let surname = "";
    switch(fullname.split(" ").length){
      case 1: name = fullname; break;
      case 2: {
        let spl = fullname.split(" ");
        name = spl[0]; surname = spl[1];
        break;
      }
      case 3: {
        let spl = fullname.split(" ");
        name = spl[0]; surname = spl[1] + " " + spl[2];
        break;
      }
      case 4: {
        let spl = fullname.split(" ");
        name = spl[0] + " " + spl[1]; 
        surname = spl[2] + " " + spl[3];
        break;
      }
    }
    
    await setDoc(doc(this.db, "users", username + "@" + name), {
      name: name,
      surname: surname,
      wallets: [],
      email: mail,
      isAdmin: false,
      phone: "",
      username: username + "@" + name
    });
  }
}
