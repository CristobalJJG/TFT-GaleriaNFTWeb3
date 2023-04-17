export class NFT{
    name: string;
    description: string;
    image: string;
    price: string;
    owner: string;

    constructor(name: string, description: string, image: string, price: string, owner: string){
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.owner = owner;
    }

    public getName(){return this.name}
    public getDescription(){return this.description}
    public getImage(){return this.image}
    public getPrice(){return this.price}
    public getOwner(){return this.owner}
}