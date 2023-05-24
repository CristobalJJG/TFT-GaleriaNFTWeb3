import { Injectable } from '@angular/core';
import { Alchemy, Network } from "alchemy-sdk";
import { environment } from 'src/environments/environment';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  private alchemy;

  constructor(private snack: SnackbarService) {
    const settings = {
      apiKey: environment.alchemy,
      network: Network.ETH_MAINNET,
    };

    this.alchemy = new Alchemy(settings);
  }

  /* https://docs.alchemy.com/docs/how-to-get-all-nfts-in-a-collection */
  async getNFTs(address: string) {
    const { nfts } = await this.alchemy.nft.getNftsForContract(address);
    return nfts;
  };
}
