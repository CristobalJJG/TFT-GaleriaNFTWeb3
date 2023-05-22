import { Injectable } from '@angular/core';
import { Alchemy, Network } from "alchemy-sdk";
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
    //const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"; //monos
    //const address = "0x23581767a106ae21c074b2276d25e5c3e136a68b"; //buhos
    //const address = "0x0bcc509282a5fb44c32c59e2fa1ce613f51c86a2"; //candyss
    //const address = "0xa49a0e5eF83cF89Ac8aae182f22E6464B229eFC8";
    const address = "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949";   //Bichitos rechonchos   
    const { nfts } = await this.alchemy.nft.getNftsForContract(address);
    return nfts;
  };
}
