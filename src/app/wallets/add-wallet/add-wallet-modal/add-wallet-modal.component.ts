import { Component } from '@angular/core';
import { NFT } from 'src/app/class/nft';
import { Wallet } from 'src/app/class/wallet';

@Component({
  selector: 'app-add-wallet-modal',
  templateUrl: './add-wallet-modal.component.html',
  styleUrls: ['./add-wallet-modal.component.scss']
})
export class AddWalletModalComponent {

  future_wallet: Wallet = new Wallet("Nombre", "", 0, "URL", "BTC");

  changeCoin(coin: any) {
    this.future_wallet.setCoin(coin.target.value);
  }
}
