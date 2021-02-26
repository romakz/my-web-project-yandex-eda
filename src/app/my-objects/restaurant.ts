export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public rating: number,
    public productListType: string[],
    public imageUrl: string,
    public orderCostLimit: number,
    public freeDeliveryCost: number,
    public deliverCost: number
  ) {}
}
