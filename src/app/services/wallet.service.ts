import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class WalletService {
  core: any;
  url: string = "";

  constructor(protected http: HttpClient) {
    let s = document.location.href.split('/');
    this.url = s[0] + "//" + s[2]
  }

  async getBalance(address: string) {
    /* const { data } = await axios.get('http://localhost:3000/balances', {
      params: { address: address }
    }); */
    const { data } = await axios.get('https://tft-galeria-web3-backend.vercel.app/balances', {
      params: { address: address }
    });
    return data.nativeBalance;
  }
}
