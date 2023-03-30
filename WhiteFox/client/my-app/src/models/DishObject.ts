export class DishObject {
    public id: number
    public name: string

    public compound: string
    public price: number
    public rating: number
    public img: string

    constructor(id: number, name: string, compound: string, price: number, rating: number, img: string) {
        this.id = id;
        this.name = name;
        this.compound = compound;
        this.price = price;
        this.rating = rating;
        this.img = img;
    }
}