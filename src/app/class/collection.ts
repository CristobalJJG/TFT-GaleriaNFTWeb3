export class Collection {
    private address: string = "";
    private externalURL: string = "";
    private name: string = "";
    private pict: string = "";

    constructor(address: string, externalURL: string, name: string, pict: string) {
        this.address = address;
        this.externalURL = externalURL;
        this.name = name;
        this.pict = pict;
    }

    getaddress() { return this.address; }
    getExternalURL() { return this.externalURL; }
    getName() { return this.name; }
    getPict() { return this.pict; }

    setaddress(address: string) { this.address = address; }
    setExternalURL(externalURL: string) { this.externalURL = externalURL; }
    setName(name: string) { this.name = name; }
    setPict(pict: string) { this.pict = pict; }
}