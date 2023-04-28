import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AddWalletModalComponent } from './add-wallet-modal/add-wallet-modal.component';
@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss', '../wallet-card/wallet-card.component.scss']
})
export class AddWalletComponent {

  constructor(protected modal: ModalService) { }

  openDialog() {
    this.modal.openDialog(AddWalletModalComponent, "900px", "600px")
  }
}
