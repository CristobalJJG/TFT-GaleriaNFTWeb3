import { Component, OnInit, ViewChild } from '@angular/core';
import { NftService } from '../services/nft.service';
import { NFT } from '../class/nft';
import { GalleryFilterComponent } from './gallery-filter/gallery-filter.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  private NFTs: NFT[] = [];
  protected showNFTs: NFT[] = [];
  protected filters = new Map();
  @ViewChild(GalleryFilterComponent) filter: any;

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
      this.showNFTs = this.NFTs;
      console.log(this.NFTs[0]);
    })
  }

  updateView(message:any) {
    var seg1 = new Date().getSeconds();
    var empty: boolean = false;
    let m: Map<string, string[]> = message;
    m.forEach( (value) => {
      console.log("length = "+ value.length);
      
      if(value.length <= 0){
        this.showNFTs = this.NFTs; 
        empty = true;
        return;
      }else empty = false;
      
    })
    if(empty) return;
    
    this.showNFTs = [];
    console.log(m);
    
    for (let n of this.NFTs) {
      m.forEach((value, key) => {
        if (value.includes(n.getAttributes().get(key) + "")) {
          if (!this.showNFTs.includes(n)) this.showNFTs.push(n);
        } else {
          if (this.showNFTs.includes(n)) this.showNFTs = this.showNFTs.filter((v) => v != n);
        }
      })
    }
    console.log("Time to filter: " + (seg1 - new Date().getSeconds()));
  }
}
