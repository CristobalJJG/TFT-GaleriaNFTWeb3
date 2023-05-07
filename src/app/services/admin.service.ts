import { Injectable } from '@angular/core';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  db = getFirestore(AuthService.app);

  async getAllUsers() {
    let users: any[] = [];

    let q = query(collection(this.db, 'users'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => { users.push(doc.data()) });
    return users;
  }
}
