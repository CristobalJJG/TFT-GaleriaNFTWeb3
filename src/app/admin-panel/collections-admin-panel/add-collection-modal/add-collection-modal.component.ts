import { Component } from '@angular/core';
import { Collection } from 'src/app/class/collection';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-add-collection-modal',
  templateUrl: './add-collection-modal.component.html',
  styleUrls: ['./add-collection-modal.component.scss',
    '../../../wallets/add-wallet/add-wallet-modal/add-wallet-modal.component.scss']
})
export class AddCollectionModalComponent {

  constructor(private db: CollectionService) { }

  addCollection(data: any) {
    console.log(data);
    let collection = new Collection(
      data.address.value,
      data.url.value,
      data.name.value,
      data.img.value
    )
    this.db.addCollections(data.commonName.value, collection);
  }

}
