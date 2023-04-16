import { Component, OnInit } from '@angular/core';
import { NftService } from '../services/nft.service';
import { Nft } from 'alchemy-sdk';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  protected NFTs: Nft[] = []; 

  constructor(protected nft: NftService){ }
  
  async ngOnInit() {
    this.nft.getNFTs().then(data => { 
      for(let nft of data) this.NFTs.push(nft) 
      console.log(data[1]);
      
    })
  }
}
