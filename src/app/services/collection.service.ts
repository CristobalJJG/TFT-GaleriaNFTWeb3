import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { collection, doc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore';
import { Collection } from '../class/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  db = getFirestore(AuthService.app);

  constructor() { }


  async getAllCollections() {
    let collections: any[] = [];

    let q = query(collection(this.db, 'collections'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => { collections.push(doc.data()) });
    return collections;
  }

  async addCollections(commonName: string, collection: Collection) {
    try {
      await setDoc(doc(this.db, "collections", commonName), {
        address: collection.getaddress(),
        externalURL: collection.getExternalURL(),
        name: collection.getName(),
        pict: collection.getPict(),
      }).then(() => window.location.reload());
    } catch (e) { console.error(e); }
  }

  getNameFromAddress(collections: Collection[], address: string) {
    let name = "";
    collections.forEach(element => {
      if (element.address == address)
        name = element.name;
    });
    return name;
  }
}
