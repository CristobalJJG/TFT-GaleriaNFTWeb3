import { Injectable } from '@angular/core';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { AuthService } from './auth-service.service';
import { FirestoreService } from './firestore-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private fire: FirestoreService) { }

  db = getFirestore(AuthService.app);

  async verifyAdmin(username: string) {
    let res = false;
    const q = query(collection(this.db, "cities"), where("isPremium", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data()['username'] == username) { res = true; }
    });
    return res;
  }

  async getAllUsers() {
    let users: any[] = [];

    let q = query(collection(this.db, 'users'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => { users.push(doc.data()) });
    return users;
  }

  async getCollections() {
    return this.fire.getAllCollections();
  }
}
