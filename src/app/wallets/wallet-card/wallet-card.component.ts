import { Component, Input } from '@angular/core';
import { Wallet } from 'src/app/class/wallet';

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss']
})
export class WalletCardComponent {
  @Input() wallet: Wallet | undefined;
  showAdd: boolean = false;

  goToURL() {
    location.href = this.wallet!.getUrl();
  }

  showAddress() {
    this.showAdd = !this.showAdd;
  }
}
