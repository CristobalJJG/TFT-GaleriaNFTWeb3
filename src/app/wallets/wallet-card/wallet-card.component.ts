import { Component } from '@angular/core';
import { Wallet } from 'src/app/class/wallet';

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss']
})
export class WalletCardComponent {
  protected wallet: Wallet = new Wallet("Coinbase", "0x123456789abcd", 25.26, "www.coinbase.com", "btc".toUpperCase());

}
