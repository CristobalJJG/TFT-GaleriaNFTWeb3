import { Component } from '@angular/core';
import { Wallet } from '../class/wallet';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss', '../gallery/gallery.component.scss']
})
export class WalletsComponent {
  wallets: Wallet[] = [];

  constructor(wallet: WalletService) {
    let v = JSON.parse(localStorage.getItem('userData') || '')['wallets'];
    for (let w of v) {
      /* wallet.getBalance(w['address']); */
      this.wallets.push(new Wallet(
        w['name'],
        w['address'],
        w['balance'],
        w['url'],
        w['coin']
      ));
    }
  }

  updateView(e: any) {

  }
}
