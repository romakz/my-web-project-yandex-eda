import {Product} from './product';

export class Order {
  public id: number;
  public userId: number;
  public cost: number;
  public items: Product[];
  public deliveryStatus: boolean;
  public deliveryCost: number;
  public date: Date;


  constructor(userId: number, cost: number, items: Product[], deliveryStatus: boolean, deliveryCost: number, date: Date) {
    this.userId = userId;
    this.cost = cost;
    this.items = items;
    this.deliveryStatus = deliveryStatus;
    this.deliveryCost = deliveryCost;
    this.date = date;
  }
}
