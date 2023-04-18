export class NFT {
    name: string;
    description: string;
    image: string;
    price: string;
    owner: string;
    attributes: Map<string, string> = new Map();

    constructor(name: string, description: string, image: string, price: string, owner: string, attributes: Record<string, any>[]) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.owner = owner;

        for (let att of attributes) {
            this.attributes.set(att['trait_type'], att['value']);
        }
    }

    public getName() { return this.name }
    public getDescription() { return this.description }
    public getImage() { return this.image }
    public getPrice() { return this.price }
    public getOwner() { return this.owner }
    public getAttributes() { return this.attributes }
}