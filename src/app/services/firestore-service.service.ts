import { Injectable } from '@angular/core';
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { AuthService } from './auth-service.service';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db = getFirestore(AuthService.app);

  async getUserInfo(mail: string) {
    let snap = await getDoc(doc(this.db, "users", mail.split("@")[0]));
    if (snap.exists())
      localStorage.setItem("userData", JSON.stringify(snap.data()))
    else
      console.log("No hay datos, señor");
  }

  async addUser(mail: string, fullname: string) {
    let username = mail.split("@")[0]

    let name = "";
    let surname = "";
    switch (fullname.split(" ").length) {
      case 1: name = this.toPascal(fullname); break;
      case 2: {
        let spl = fullname.split(" ");
        name = this.toPascal(spl[0]);
        surname = this.toPascal(spl[1]);;
        break;
      }
      case 3: {
        let spl = fullname.split(" ");
        name = this.toPascal(spl[0]);
        surname = this.toPascal(spl[1]) + " " + this.toPascal(spl[2]);
        break;
      }
      case 4: {
        let spl = fullname.split(" ");
        name = this.toPascal(spl[0]) + " " + this.toPascal(spl[1]);
        surname = this.toPascal(spl[2]) + " " + this.toPascal(spl[3]);
        break;
      }
    }

    await setDoc(doc(this.db, "users", username.toLowerCase()), {
      name: name,
      surname: surname,
      wallets: [],
      email: mail.toLowerCase(),
      isAdmin: false,
      phone: "",
      username: username + "@" + name,
      create_date: new Date(Date.now()).toDateString(),
      last_login: new Date(Date.now()).toDateString()
    });
  }

  async updateUser(user: User) {
    try {
      let wallets: any[] = []
      user.getWallets().forEach((w: any) => {
        wallets.push({
          "name": w.name,
          "address": w.address,
          "balance": w.balance,
          "coin": w.coin,
          "url": w.url
        });
      })

      await setDoc(doc(this.db, "users", user.getEmail().split('@')[0].toLowerCase()), {
        name: user.getName(),
        surname: user.getSurname(),
        wallets: wallets,
        email: user.getEmail(),
        isAdmin: user.getIsAdmin(),
        phone: user.getPhone(),
        username: user.getUsername(),
        create_date: user.getCreateDate(),
        last_login: user.getLastLogin()
      });
      window.location.reload();
    } catch (e) { console.error(e) };
  }

  protected toPascal(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase()
  }
}
