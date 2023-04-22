import { Component, Input } from '@angular/core';
import { NFT } from '../../class/nft';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})

export class NftCardComponent{ @Input() data: NFT | undefined; }
