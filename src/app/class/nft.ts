export class NFT {
    name: string;
    description: string;
    image: string;
    price: string;
    address: string;
    attributes: Map<string, string> = new Map();
    goTo: string;

    constructor(name: string, description: string, image: string, price: string, owner: string, attributes: Record<string, any>[], goTo: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.address = owner;
        this.goTo = goTo;
        for (let att of attributes) {
            this.attributes.set(att['trait_type'], att['value']);
        }
    }

    public getName() { return this.name }
    public getDescription() { return this.description }
    public getImage() { return this.image }
    public getPrice() { return this.price }
    public getOwner() { return this.address }
    public getAttributes() { return this.attributes }
    public getGoTo() { return this.goTo }
}