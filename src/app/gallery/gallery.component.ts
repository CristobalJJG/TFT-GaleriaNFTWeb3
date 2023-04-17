import { Component, OnInit } from '@angular/core';
import { NftService } from '../services/nft.service';
import { NFT } from '../class/nft';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  protected NFTs: NFT[] = []; 

  constructor(protected nft: NftService){ }
  
  async ngOnInit() {
    this.nft.getNFTs().then(data => { 
      for(let item of data){
        this.NFTs.push(new NFT(
          item.contract.symbol + " " + item.title,
          item.contract.openSea?.description + "",
          item.media[0].gateway,
          item.contract.openSea?.floorPrice + "",
          item.contract.contractDeployer + ""
        )) 
      } 
    })
  }
}
