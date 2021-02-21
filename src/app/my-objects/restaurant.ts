export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public rating: number,
    public productList: string[],
    public imageUrl: string
  ) {}
}
