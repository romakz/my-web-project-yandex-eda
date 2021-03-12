import {Product} from './product';

export class Order {
  public clientLogin: string;
  public cost: number;
  public items: Product[];
  public deliveryStatus: boolean;
  public deliveryCost: number;
  public date: Date;


  constructor(clientLogin: string, cost: number, items: Product[], deliveryStatus: boolean, deliveryCost: number, date: Date) {
    this.clientLogin = clientLogin;
    this.cost = cost;
    this.items = items;
    this.deliveryStatus = deliveryStatus;
    this.deliveryCost = deliveryCost;
    this.date = date;
  }
}
