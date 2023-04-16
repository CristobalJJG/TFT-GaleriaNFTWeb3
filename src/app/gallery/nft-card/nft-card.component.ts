import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})

export class NftCardComponent implements OnInit{

  @Input() data: any;

  protected id: string = "";
  protected address: string = "";
  protected name: string = "";
  protected price: string = "";
  protected picture: string = "";


  constructor(){}

  ngOnInit(): void {

    this.id = this.data.tokenId; 

    var contract = this.data.contract;
    this.address = contract.address;
    this.name = contract.name;
    this.price = contract.openSea.floorPrice;
    this.picture = this.data.media[0].gateway;
  }

  
}
