import { Component, OnInit, ViewChild } from '@angular/core';
import { NftService } from '../services/nft.service';
import { NFT } from '../class/nft';
import { Nft } from 'alchemy-sdk';
import { FilterComponent } from './filter/filter.component';
import { Collection } from '../class/collection';
import { CollectionService } from '../services/collection.service';
import { SnackbarService } from '../services/snackbar.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  private NFTs: NFT[] = [];
  protected collections: Collection[] = [];
  protected showNFTs: NFT[] = [];
  protected filters = new Map();
  protected address = "0x23581767a106ae21c074b2276d25e5c3e136a68b";
  protected collectionName = "Moonbirds"
  @ViewChild(FilterComponent) filter: any;

  constructor(protected nft: NftService,
    protected collModal: CollectionService,
    private snack: SnackbarService) { }

  async ngOnInit() {
    this.getNFTs();
    //this.shuffle();
    this.getCollections();
  }

  changeCollection(address: string) {
    this.NFTs = [];
    this.showNFTs = [];
    this.filter = new Map();
    this.filters = new Map();
    this.address = address;
    this.collectionName = this.collModal.getNameFromAddress(this.collections, address)
    this.getNFTs();
    this.snack.openSnackBar("Cargando la coleción " + this.collModal.getNameFromAddress(this.collections, address));
  }

  async getCollections() {
    await this.collModal.getAllCollections().then((data) => {
      data.forEach((u: Collection) => { this.collections.push(u); })
    })
  }

  async getNFTs() {
    await this.nft.getNFTs(this.address).then(data => {
      for (let item of data) {
        this.push_data_in_NFT(item);

        if (item.rawMetadata!.attributes != undefined)
          for (let att of item.rawMetadata!.attributes)
            this.push_attribute(att);
      }
      this.showNFTs = this.NFTs;
    })
  }

  /* shuffle() {
    for (var i = this.showNFTs.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); //random index
      [this.showNFTs[i], this.showNFTs[j]] = [this.showNFTs[j], this.showNFTs[i]]; // swap
    }
  } */

  updateView(filters: any) {
    let f: Map<string, string[]> = filters;

    if (this.filters_straction(f)) {
      this.showNFTs = this.NFTs;
      return;
    }

    this.showNFTs = [];

    for (let n of this.NFTs) {
      this.apply_filters(f, n);
    }
  }

  /* Funciones auxiliares para mejorar el Code Smell */
  private push_data_in_NFT(item: Nft) {
    this.NFTs.push(new NFT(
      item.contract.symbol + " " + item.title,
      item.contract.openSea?.description + "",
      item.media[0].gateway,
      item.contract.openSea?.floorPrice + "",
      item.contract.address + "",
      item.rawMetadata?.attributes || [],
      item.tokenId
    ))
  }

  private push_attribute(att: any) {
    if (this.filters.has(att['trait_type'])) {
      let list = this.filters.get(att['trait_type'])
      if (!list.includes(att['value'])) { list.push(att['value']) }
    } else {
      this.filters.set(att['trait_type'], [att['value']])
    }
  }

  private filters_straction(f: Map<string, string[]>): boolean {
    let empty: boolean = false;
    f.forEach((value) => {
      let aux = (value.length <= 0)
      if (aux) empty = aux;
    })
    return empty;
  }

  private apply_filters(f: Map<string, string[]>, n: NFT) {
    f.forEach((value, key) => {
      if (value.includes(n.getAttributes().get(key) + "")) {
        if (!this.showNFTs.includes(n)) this.showNFTs.push(n);
      } else
        if (this.showNFTs.includes(n)) this.showNFTs = this.showNFTs.filter((v) => v != n);
    })
  }
}