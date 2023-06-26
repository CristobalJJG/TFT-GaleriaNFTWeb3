import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NFT } from 'src/app/class/nft';
import { User } from 'src/app/class/user';
import { Wallet } from 'src/app/class/wallet';
import { FirestoreService } from 'src/app/services/firestore-service.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-wallet-modal',
  templateUrl: './add-wallet-modal.component.html',
  styleUrls: ['./add-wallet-modal.component.scss']
})
export class AddWalletModalComponent {
  nameBeforeChange: string = "";
  future_wallet: Wallet;
  editing: boolean = false;
  constructor(private modal: ModalService, private db: FirestoreService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.wallet) {
      let w: Wallet = data.wallet;
      this.nameBeforeChange = w.getName();
      this.future_wallet = w;
    } else {
      this.future_wallet = new Wallet("Nombre", "", 0, "URL", "ETH");
    }

    if (data.edit) this.editing = true;
  }

  changeCoin(coin: any) {
    console.log(coin.target.value);
    this.future_wallet.setCoin(coin.target.value);
  }

  changeName(name: any) {
    let put_name = name.target.value;
    if (put_name.trim() === "") this.future_wallet.setName("Nombre");
    else this.future_wallet.setName(put_name);
  }
  changeAddress(address: any) {
    let put_address = address.target.value;
    if (put_address.trim() === "") this.future_wallet.setAddress("");
    else this.future_wallet.setAddress(put_address);
  }

  changeUrl(url: any) {
    let put_url = url.target.value;
    if (put_url.trim() === "") this.future_wallet.setUrl("URL");
    else this.future_wallet.setUrl(put_url);
  }

  addWallet() {
    let user: User | undefined = User.fromJSONtoUser(JSON.parse(localStorage.getItem("userData") || ""));
    if (user) {
      if (this.editing) user.removeWallet(this.nameBeforeChange);

      user.addWallet(this.future_wallet);
      this.db.updateUser(user);
      localStorage.setItem("userData", user.toJSON());
      this.modal.closeDialog();
    }
  }
}
