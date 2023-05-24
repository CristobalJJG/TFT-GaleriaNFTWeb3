import { Component, OnInit } from '@angular/core';
import { Wallet } from '../class/wallet';
import { WalletService } from '../services/wallet.service';
import { AuthService } from '../services/auth-service.service';
import { User } from '../class/user';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { MessageComponent } from '../components/message/message.component';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['../gallery/gallery.component.scss', './wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  wallets: Wallet[] = [];
  userRegistered: User | undefined = undefined;

  constructor(protected wallet: WalletService, protected auth: AuthService,
    private router: Router, private modal: ModalService) {
    this.userRegistered = this.auth.getLocalUser();
    if (!this.userRegistered) {
      this.router.navigateByUrl('/home');
      this.modal.openDialog(MessageComponent, '300px', '300px', {
        data: {
          text: 'Para acceder a la <b>zona de carteras</b> es necesario que <b>Inicie Sesión</b> o se <b>Registre</b>',
          class: 'error'
        }
      })
    }
  }

  ngOnInit(): void {
    let v = JSON.parse(localStorage.getItem('userData') || '')['wallets'];
    for (let w of v) {
      this.wallet.getBalance(w['address'])
        .then((data: any) => {
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
