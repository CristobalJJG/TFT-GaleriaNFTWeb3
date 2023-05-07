export class Collection {
    private adress: string = "";
    private externalURL: string = "";
    private name: string = "";
    private pict: string = "";

    constructor(adress: string, externalURL: string, name: string, pict: string) {
        this.adress = adress;
        this.externalURL = externalURL;
        this.name = name;
        this.pict = pict;
    }

    getAdress() { return this.adress; }
    getExternalURL() { return this.externalURL; }
    getName() { return this.name; }
    getPict() { return this.pict; }

    setAdress(adress: string) { this.adress = adress; }
    setExternalURL(externalURL: string) { this.externalURL = externalURL; }
    setName(name: string) { this.name = name; }
    setPict(pict: string) { this.pict = pict; }
}