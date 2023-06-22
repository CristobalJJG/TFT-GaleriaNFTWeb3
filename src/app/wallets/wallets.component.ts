import { Component, OnInit } from '@angular/core';
import { Wallet } from '../class/wallet';
import { WalletService } from '../services/wallet.service';
import { AuthService } from '../services/auth-service.service';
import { User } from '../class/user';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { MessageComponent } from '../components/message/message.component';
import { AddWalletModalComponent } from './add-wallet/add-wallet-modal/add-wallet-modal.component';
import { FirestoreService } from '../services/firestore-service.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['../gallery/gallery.component.scss', './wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  wallets: Wallet[] = [];
  userRegistered: User | undefined = undefined;

  constructor(protected wallet: WalletService,
    protected auth: AuthService, private db: FirestoreService,
    private router: Router, private modal: ModalService) {
    this.userRegistered = this.auth.getLocalUser();
    document.onclick = this.hideMenu;
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
    this.isEmpty();
  }

  notLoaded: boolean = false;
  isEmpty() {
    setTimeout(() => {
      if (this.wallets.length == 0) this.notLoaded = true;
    }, 7500);
  }

  hideMenu() {
    let cm = document.getElementById("contextMenu")
    if (cm != undefined) cm.style.display = "none";
  }

  openContextMenu(e: any, w: Wallet) {
    e.preventDefault();
    this.choosenWallet = w;
    let cm = document.getElementById("contextMenu")
    if (cm != undefined && cm.style.display == "block") {
      this.hideMenu();
    } else {
      var menu = document.getElementById("contextMenu");
      menu!.style.display = 'block';
      menu!.style.left = e.pageX + "px";
      menu!.style.top = e.pageY + "px";
    }
  }
  choosenWallet: Wallet | undefined;

  edit() {
    if (!this.choosenWallet)
      console.log("NO hay cartera para editar");
    else {
      this.modal.openDialog(AddWalletModalComponent, "900px", "600px", { wallet: this.choosenWallet })
      console.log(this.choosenWallet.getName())
    }
  }

  delete() {
    if (!this.choosenWallet)
      console.log("NO hay cartera para eliminar");
    else {

      console.log(this.choosenWallet.getName())
    }
  }
}