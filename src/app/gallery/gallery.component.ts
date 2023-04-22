import { Component, OnInit, ViewChild } from '@angular/core';
import { NftService } from '../services/nft.service';
import { NFT } from '../class/nft';
import { GalleryFilterComponent } from './gallery-filter/gallery-filter.component';
import { Nft } from 'alchemy-sdk';
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
        this.push_data_in_NFT(item);

        if (item.rawMetadata!.attributes != undefined)
          for (let att of item.rawMetadata!.attributes) 
            this.push_attribute(att);
      }
      this.showNFTs = this.NFTs;
    })
  }
  
  updateView(filters:any) {
    let f: Map<string, string[]> = filters;

    if(this.filters_straction(f)){
      this.showNFTs = this.NFTs; 
      return;
    }
    
    this.showNFTs = [];
    
    for (let n of this.NFTs) {
      this.apply_filters(f, n);
    }
  }

  /* Funciones auxiliares para mejorar el Code Smell */
  private push_data_in_NFT(item: Nft){
    this.NFTs.push(new NFT(
      item.contract.symbol + " " + item.title,
      item.contract.openSea?.description + "",
      item.media[0].gateway,
      item.contract.openSea?.floorPrice + "",
      item.contract.contractDeployer + "",
      item.rawMetadata?.attributes || []
    ))
  }

  private push_attribute(att:any){
    if (this.filters.has(att['trait_type'])) {
      let list = this.filters.get(att['trait_type'])
      if (!list.includes(att['value'])) { list.push(att['value']) }
    } else {
      this.filters.set(att['trait_type'], [att['value']])
    }
  }

  private filters_straction(f: Map<string, string[]>):boolean {
    let empty: boolean = false;
    f.forEach( (value) => { 
      empty = (value.length <= 0); 
      if(empty) return;
    })
    return empty;
  }

  private apply_filters(f: Map<string, string[]>, n:NFT){
    f.forEach((value, key) => {
      if (value.includes(n.getAttributes().get(key) + "")) {
        if (!this.showNFTs.includes(n)) this.showNFTs.push(n);
      } else 
        if (this.showNFTs.includes(n)) this.showNFTs = this.showNFTs.filter((v) => v != n);
    })
  }
}