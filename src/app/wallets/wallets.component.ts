import { Component, OnInit } from '@angular/core';
import { Wallet } from '../class/wallet';
import { WalletService } from '../services/wallet.service';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['../gallery/gallery.component.scss', './wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  wallets: Wallet[] = [];

  constructor(protected wallet: WalletService, protected auth: AuthService) {

  }
  ngOnInit(): void {
    let v = JSON.parse(localStorage.getItem('userData') || '')['wallets'];
    for (let w of v) {
      this.wallet.getBalance(w['address'])
        .then((data: any) => {
          console.log(data);

          this.wallets.push(new Wallet(
            w['name'],
            w['address'],
            data,
            w['url'],
            w['coin']
          ));
        })
    }
  }
}
