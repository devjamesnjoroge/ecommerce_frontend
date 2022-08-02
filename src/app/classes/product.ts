export class Product {
    constructor(
        public url: string,
        public name: string,
        public price: number,
        public id: number,
        public category: string,
        public subcategory: string,
        public description: string,
        public sizes: string,
        public color: string,
        public brand: string,
        public material: string,
        public shipping_from: string,
        public shipping_price: number,
    ) {}
   
}
