import { Component } from '@angular/core';
import { Wallet } from '../class/wallet';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss', '../gallery/gallery.component.scss']
})
export class WalletsComponent {
  wallets: Wallet[] = [];

  constructor() {
    let v = JSON.parse(localStorage.getItem('userData') || '')['wallets'];
    for (let w of v) {
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
