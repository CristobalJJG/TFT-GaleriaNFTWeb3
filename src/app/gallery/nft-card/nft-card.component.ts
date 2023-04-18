import { Component, Input, OnInit } from '@angular/core';
import { NFT } from '../../class/nft';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})

export class NftCardComponent implements OnInit{

  @Input() data: NFT | undefined;


  constructor(){}

  ngOnInit(): void {

  }

  
}
