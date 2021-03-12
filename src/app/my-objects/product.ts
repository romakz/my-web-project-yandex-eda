export class Product {
  constructor(
    public id: number,
    public restaurantId: number,
    public name: string,
    public mass: number,
    public value: string,
    public price: number,
    public imageUrl: string
  ) {}
}
