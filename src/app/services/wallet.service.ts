import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import Core from '@moralisweb3/common-core';
import EvmApi from '@moralisweb3/evm-api';
import Moralis from 'moralis';

@Injectable({
  providedIn: 'root'
})
export class WalletService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startServer();
  }

  async startServer() {
    const core = Core.create();
    core.registerModules([EvmApi]);

    core.start({
      apiKey: environment.moralis
    });

  }

  async getBalance(address: string) {
    /* let nativeBalance, tokenBalances;
    try {
      [nativeBalance, tokenBalances] = await Promise.all([
        Moralis.EvmApi.balance.getNativeBalance({
          chain: EvmChain.ETHEREUM,
          address: address
        }),
        Moralis.EvmApi.balance.getWalletTokenBalances({
          chain: EvmChain.ETHEREUM,
          address: address
        })
      ])
    } catch (e) {
      console.error(e);
    }
    console.log(nativeBalance);
    console.log(tokenBalances);
 */
  }
}
