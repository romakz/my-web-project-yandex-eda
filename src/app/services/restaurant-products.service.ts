import { Injectable } from '@angular/core';
import {Product} from '../my-objects/product';
import {TagWithProducts} from '../my-objects/tag-with-products';
import {LoggerService} from './logger.service';

@Injectable()
export class RestaurantProductsService {
  private sets: Product[] = [];
  private sushi: Product[] = [];
  private drinks: Product[] = [];
  private combos: Product[] = [];
  private burgers: Product[] = [];
  private coffees: Product[] = [];
  private teas: Product[] = [];
  private pizza: Product[] = [];

  constructor(
    private loggerService: LoggerService
  ) {
    this.initBurgers();
    this.initCoffees();
    this.initCombos();
    this.initDrinks();
    this.initSushi();
    this.initSets();
    this.initTeas();
    this.initPizza();
  }

  getProductsByProductTagsAndRestaurantId(restaurantId: number, tags: string[]): TagWithProducts[] {
    let result: TagWithProducts[] = [];
    let i = 0;

    for (let tag of tags) {
      if (tag === 'sets') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getSets(restaurantId);
        i++;
      } else if (tag === 'sushi') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getSushi(restaurantId);
        i++;
      } else if (tag === 'drinks') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getDrinks(restaurantId);
        i++;
      } else if (tag === 'combos') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getCombos(restaurantId);
        i++;
      } else if (tag === 'burgers') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getBurgers(restaurantId);
        i++;
      } else if (tag === 'coffees') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getCoffees(restaurantId);
        i++;
      } else if (tag === 'teas') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getTeas(restaurantId);
        i++;
      } else if (tag === 'pizza') {
        result.push(new TagWithProducts(tag));
        result[i].products = this.getPizza(restaurantId);
        i++;
      }
    }

    this.loggerService.doLog('get restaurant products by restaurantId=' + restaurantId + ' and by tag=' + tags);
    return result;
  }


  getSets(id: number): Product[] {
    let products: Product[] = [];

    for (let set of this.sets) {
      if (set.restaurantId === id) {
        products.push(set);
      }
    }

    this.loggerService.doLog('get sets by id=' + id);
    return products;
  }

  getSushi(id: number): Product[] {
    let products: Product[] = [];

    for (let s of this.sushi) {
      if (s.restaurantId === id) {
        products.push(s);
      }
    }

    this.loggerService.doLog('get sushi by id=' + id);
    return products;
  }

  getDrinks(id: number): Product[] {
    let products: Product[] = [];

    for (let drink of this.drinks) {
      if (drink.restaurantId === id) {
        products.push(drink);
      }
    }

    this.loggerService.doLog('get drinks by id=' + id);
    return products;
  }

  getCombos(id: number): Product[] {
    let products: Product[] = [];

    for (let combo of this.combos) {
      if (combo.restaurantId === id) {
        products.push(combo);
      }
    }

    this.loggerService.doLog('get combos by id=' + id);
    return products;
  }

  getBurgers(id: number): Product[] {
    let products: Product[] = [];

    for (let a of this.burgers) {
      if (a.restaurantId === id) {
        products.push(a);
      }
    }

    this.loggerService.doLog('get burgers by id=' + id);
    return products;
  }

  getCoffees(id: number): Product[] {
    let products: Product[] = [];

    for (let a of this.coffees) {
      if (a.restaurantId === id) {
        products.push(a);
      }
    }

    this.loggerService.doLog('get coffees by id=' + id);
    return products;
  }

  getTeas(id: number): Product[] {
    let products: Product[] = [];

    for (let a of this.teas) {
      if (a.restaurantId === id) {
        products.push(a);
      }
    }

    this.loggerService.doLog('get teas by id=' + id);
    return products;
  }

  getPizza(id: number): Product[] {
    let products: Product[] = [];

    for (let a of this.pizza) {
      if (a.restaurantId === id) {
        products.push(a);
      }
    }

    this.loggerService.doLog('get pizza by id=' + id);
    return products;
  }

  initSets(): void {
    this.sets.push(new Product(1, 1, "Сет Киото", 900, "г", 3900, 'assets/images/products/item1.jpeg'));
    this.sets.push(new Product(2, 1, "Сет Нори", 1300, "г", 5390, 'assets/images/products/item2.jpeg'));
    this.sets.push(new Product(3, 1, "Сет Токио", 2800, "г", 7790, 'assets/images/products/item3.jpeg'));
    this.sets.push(new Product(4, 6, "Сет Мацури", 1200, "г", 9990, 'assets/images/products/item18.jpeg'));
    this.sets.push(new Product(5, 6, "Сет Покемон", 850, "г", 9990, 'assets/images/products/item19.jpeg'));
  }

  initSushi(): void {
    this.sushi.push(new Product(1, 1, "Филадельфия", 220, "г", 1490, 'assets/images/products/item4.jpeg'));
    this.sushi.push(new Product(2, 1, "Цезарь темпура", 250, "г", 1490, 'assets/images/products/item5.jpeg'));
    this.sushi.push(new Product(3, 6, "Суши с креветкой", 65, "г", 990, 'assets/images/products/item20.jpeg'));
    this.sushi.push(new Product(4, 6, "Суши с лососем", 65, "г", 990, 'assets/images/products/item21.jpeg'));
  }

  initDrinks(): void {
    this.drinks.push(new Product(1, 1, "Coca-Cola", 1000, "л", 490, 'assets/images/products/item6.jpeg'));
    this.drinks.push(new Product(2, 1, "Fanta", 1000, "л", 490, 'assets/images/products/item7.jpeg'));
    this.drinks.push(new Product(3, 1, "Nori drink", 1000, "л", 490, 'assets/images/products/item8.jpeg'));
    this.drinks.push(new Product(4, 4, "Lipton Лимон", 500, "л", 300, ''));
    this.drinks.push(new Product(5, 4, "Минеральная вода Asu", 500, "л", 300, ''));
  }

  initCombos(): void {
    this.combos.push(new Product(1, 2, "Комбо Бургер Мистер", 340, "г", 1800, ''));
    this.combos.push(new Product(2, 2, "Комбо Бургер Мачо", 340, "г", 1400, ''));
    this.combos.push(new Product(3, 2, "Комбо Чизбургер Мачо", 340, "г", 1500, ''));
  }

  initBurgers(): void {
    this.burgers.push(new Product(1, 2, "Бургер Мистер", 220, "г", 1200, 'assets/images/products/item9.jpeg'));
    this.burgers.push(new Product(2, 2, "Бургер Мачо", 220, "г", 900, 'assets/images/products/item10.jpeg'));
    this.burgers.push(new Product(3, 2, "Чизбургер Мачо", 220, "г", 1000, 'assets/images/products/item11.jpeg'));
    this.burgers.push(new Product(4, 4, "Бургер Масала Чикен", 190, "г", 990, ''));
    this.burgers.push(new Product(5, 4, "Чизбургер", 210, "г", 990, ''));
    this.burgers.push(new Product(6, 4, "Бургер Каримен", 220, "г", 990, ''));
    this.burgers.push(new Product(7, 5, "Бургер говяжий", 300, "г", 1190, 'assets/images/products/item13.jpeg'));
    this.burgers.push(new Product(8, 5, "Бургер говяжий Двойной", 390, "г", 1690, 'assets/images/products/item14.jpeg'));
    this.burgers.push(new Product(9, 5, "Бургер куриный", 300, "г", 990, 'assets/images/products/item15.jpeg'));
  }

  initCoffees(): void {
    this.coffees.push(new Product(1, 3, "Кофе Латте", 350, "л", 700, 'assets/images/products/item12.jpeg'));
    this.coffees.push(new Product(2, 3, "Капучино", 350, "л", 700, 'assets/images/products/item12.jpeg'));
    this.coffees.push(new Product(3, 3, "Американо", 350, "л", 600, 'assets/images/products/item12.jpeg'));
  }

  initTeas(): void {
    this.teas.push(new Product(1, 3,"Чай облепиховый с медом", 350, "л", 350, 'assets/images/products/item12.jpeg'));
    this.teas.push(new Product(2, 3, "Чай Мятный с мёдом", 350, "л", 350, 'assets/images/products/item12.jpeg'));
    this.teas.push(new Product(3, 3, "Чай Имбирный с мёдом", 350, "л", 350, 'assets/images/products/item12.jpeg'));
  }

  initPizza(): void {
    this.pizza.push(new Product(1, 5, "Пицца вегетарианская", 440, "г", 1990, 'assets/images/products/item16.jpeg'));
    this.pizza.push(new Product(2, 5, "Пицца Горгонзола с грушей", 420, "г", 2190, 'assets/images/products/item17.jpeg'));
  }
}
