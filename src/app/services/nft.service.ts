import { Injectable } from '@angular/core';
import { Alchemy, Network, Nft } from "alchemy-sdk";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  private alchemy;

  constructor() {
    const settings = {
      apiKey: environment.alchemy,
      network: Network.ETH_MAINNET,
    };

    this.alchemy = new Alchemy(settings);
  }

  /* https://docs.alchemy.com/docs/how-to-get-all-nfts-in-a-collection */
  async getNFTs() {
    const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
    const { nfts } = await this.alchemy.nft.getNftsForContract(address);
    return nfts;
  };
}
