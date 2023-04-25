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
    const { data } = await axios(`http://localhost:3000/api/balances`);
    return data.nativeBalance;
  }
}
