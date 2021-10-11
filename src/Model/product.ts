export class Product {
    id: String;
    name: String;
    originalPrice: Number;
    salePrice: Number;
    images: String[];
    description: String;
    constructor(id: String, name: String,
        originalPrice: Number,
        salePrice: Number,
        images: String[],
        description: String) {
        this.id = id;
        this.name = name
        this.originalPrice = originalPrice
        this.salePrice = salePrice
        this.images = images
        this.description = description
    }
}