import {Product} from './product';

export class TagWithProducts {
  public tag: string;
  public products: Product[];

  constructor(tag: string) {
    this.tag = tag;
    this.products = [];
  }
}
