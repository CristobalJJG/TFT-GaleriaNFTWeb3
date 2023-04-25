export class Wallet {
    private name: string;
    private address: string;
    private balance: number;
    private coin: string;
    private url: string;



    constructor(name: string, address: string, balance: number, url: string, coin: string) {
        this.name = name;
        this.address = address;
        this.balance = balance;
        this.coin = coin;
        this.url = url;
    }

    public getName() { return this.name }
    public getBalance() { return (this.balance + "").slice(0, 9) }
    public getUrl() { return this.url }
    public getCoin() { return this.coin }
    public getAddress(val: string) {
        switch (val) {
            case 'hide': return this.address.slice(0, 6) + '*'.repeat(10) + this.address.slice(-4);
            case 'show':
            default: return this.address;
        }
    }

    public setName(name: string) { this.name = name }
    public setBalance(balance: number) { this.balance = balance }
    public setUrl(url: string) { this.url = url }
    public setCoin(coin: string) { this.coin = coin }
    public setAddress(address: string) { this.address = address }
}