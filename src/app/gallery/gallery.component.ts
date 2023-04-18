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
  protected filters = new Map();

  constructor(protected nft: NftService) { }

  async ngOnInit() {
    this.nft.getNFTs().then(data => {
      for (let item of data) {
        this.NFTs.push(new NFT(
          item.contract.symbol + " " + item.title,
          item.contract.openSea?.description + "",
          item.media[0].gateway,
          item.contract.openSea?.floorPrice + "",
          item.contract.contractDeployer + "",
          item.rawMetadata?.attributes || []
        ))

        if (item.rawMetadata!.attributes != undefined)
          for (let att of item.rawMetadata!.attributes) {
            if (this.filters.has(att['trait_type'])) {
              var list = this.filters.get(att['trait_type'])
              if (!list.includes(att['value'])) { list.push(att['value']) }
            } else {
              this.filters.set(att['trait_type'], [att['value']])
            }
          }
      }
      console.log(this.NFTs[0]);
      
    })
  }
}
