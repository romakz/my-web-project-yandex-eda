import {Restaurant} from './restaurant';
import {Product} from './product';
import {TagWithProductsList} from './tag-with-products-list';
import {TagWithProducts} from './tag-with-products';


export class RestaurantWithProductsArray {
  public restaurantList: Restaurant[] = [];
  public tagWithProductsLists: TagWithProductsList[] = [];

  constructor() {
    this.restaurantList.push(new Restaurant(1, 'Nori', 4.9, ['sets', 'sushi', 'drinks'], 'assets/images/restaurants/restaurant1.jpg', 1500, 1500, 990));
    this.restaurantList.push(new Restaurant(2, 'Mr. Burger', 4.4, ['combos', 'burgers'], 'assets/images/restaurants/restaurant2.jpg',  1500, 1500, 990));
    this.restaurantList.push(new Restaurant(3, 'Coffeessimo', 4.7, ['coffees', 'teas'], 'assets/images/restaurants/restaurant3.jpg',  1500, 1500, 990));
    this.restaurantList.push(new Restaurant(4, 'Burger Station', 4.8, ['burgers', 'drinks'], 'assets/images/restaurants/restaurant4.jpg', 1500, 1500, 990));
    this.restaurantList.push(new Restaurant(5, 'Шеф Бургер', 4.3, ['burgers', 'pizza'], 'assets/images/restaurants/restaurant5.jpeg', 1500, 1500, 990));
    this.restaurantList.push(new Restaurant(6, 'Киото Суши', 4.2, ['sets', 'sushi'], 'assets/images/restaurants/restaurant6.jpg', 1500, 1500, 990));

    this.tagWithProductsLists = [];
    this.tagWithProductsLists.push(new TagWithProductsList());
    this.tagWithProductsLists.push(new TagWithProductsList());
    this.tagWithProductsLists.push(new TagWithProductsList());
    this.tagWithProductsLists.push(new TagWithProductsList());
    this.tagWithProductsLists.push(new TagWithProductsList());
    this.tagWithProductsLists.push(new TagWithProductsList());

    this.tagWithProductsLists[0].tagWithProductsList.push(new TagWithProducts('sets'));
    this.tagWithProductsLists[0].tagWithProductsList[0].products.push(new Product(1, "Сет Киото", 900, "г", 3900, 'assets/images/products/item1.jpeg'));
    this.tagWithProductsLists[0].tagWithProductsList[0].products.push(new Product(2, "Сет Нори", 1300, "г", 5390, 'assets/images/products/item2.jpeg'));
    this.tagWithProductsLists[0].tagWithProductsList[0].products.push(new Product(3, "Сет Токио", 2800, "г", 7790, 'assets/images/products/item3.jpeg'));
    this.tagWithProductsLists[0].tagWithProductsList.push(new TagWithProducts('sushi'));
    this.tagWithProductsLists[0].tagWithProductsList[1].products.push(new Product(1, "Филадельфия", 220, "г", 1490, 'assets/images/products/item4.jpeg'));
    this.tagWithProductsLists[0].tagWithProductsList[1].products.push(new Product(2, "Цезарь темпура", 250, "г", 1490, 'assets/images/products/item5.jpeg'));
    this.tagWithProductsLists[0].tagWithProductsList.push(new TagWithProducts('drinks'));
    this.tagWithProductsLists[0].tagWithProductsList[2].products.push(new Product(1, "Coca-Cola", 1000, "л", 490, 'assets/images/products/item6.jpeg'));
    this.tagWithProductsLists[0].tagWithProductsList[2].products.push(new Product(2, "Fanta", 1000, "л", 490, 'assets/images/products/item7.jpeg'));
    this.tagWithProductsLists[0].tagWithProductsList[2].products.push(new Product(3, "Nori drink", 1000, "л", 490, 'assets/images/products/item8.jpeg'));

    this.tagWithProductsLists[1].tagWithProductsList.push(new TagWithProducts('combos'));
    this.tagWithProductsLists[1].tagWithProductsList[0].products.push(new Product(1, "Комбо Бургер Мистер", 340, "г", 1800, ''));
    this.tagWithProductsLists[1].tagWithProductsList[0].products.push(new Product(2, "Комбо Бургер Мачо", 340, "г", 1400, ''));
    this.tagWithProductsLists[1].tagWithProductsList[0].products.push(new Product(3, "Комбо Чизбургер Мачо", 340, "г", 1500, ''));
    this.tagWithProductsLists[1].tagWithProductsList.push(new TagWithProducts('burgers'));
    this.tagWithProductsLists[1].tagWithProductsList[1].products.push(new Product(1, "Бургер Мистер", 220, "г", 1200, 'assets/images/products/item9.jpeg'));
    this.tagWithProductsLists[1].tagWithProductsList[1].products.push(new Product(2, "Бургер Мачо", 220, "г", 900, 'assets/images/products/item10.jpeg'));
    this.tagWithProductsLists[1].tagWithProductsList[1].products.push(new Product(3, "Чизбургер Мачо", 220, "г", 1000, 'assets/images/products/item11.jpeg'));

    this.tagWithProductsLists[2].tagWithProductsList.push(new TagWithProducts('coffees'));
    this.tagWithProductsLists[2].tagWithProductsList[0].products.push(new Product(1, "Кофе Латте", 350, "л", 700, 'assets/images/products/item12.jpeg'));
    this.tagWithProductsLists[2].tagWithProductsList[0].products.push(new Product(2, "Капучино", 350, "л", 700, 'assets/images/products/item12.jpeg'));
    this.tagWithProductsLists[2].tagWithProductsList[0].products.push(new Product(3, "Американо", 350, "л", 600, 'assets/images/products/item12.jpeg'));
    this.tagWithProductsLists[2].tagWithProductsList.push(new TagWithProducts('teas'));
    this.tagWithProductsLists[2].tagWithProductsList[1].products.push(new Product(1, "Чай облепиховый с медом", 350, "л", 350, 'assets/images/products/item12.jpeg'));
    this.tagWithProductsLists[2].tagWithProductsList[1].products.push(new Product(2, "Чай Мятный с мёдом", 350, "л", 350, 'assets/images/products/item12.jpeg'));
    this.tagWithProductsLists[2].tagWithProductsList[1].products.push(new Product(3, "Чай Имбирный с мёдом", 350, "л", 350, 'assets/images/products/item12.jpeg'));

    this.tagWithProductsLists[3].tagWithProductsList.push(new TagWithProducts('drinks'));
    this.tagWithProductsLists[3].tagWithProductsList[0].products.push(new Product(4, "Lipton Лимон", 500, "л", 300, ''));
    this.tagWithProductsLists[3].tagWithProductsList[0].products.push(new Product(5, "Минеральная вода Asu", 500, "л", 300, ''));
    this.tagWithProductsLists[3].tagWithProductsList.push(new TagWithProducts('burgers'));
    this.tagWithProductsLists[3].tagWithProductsList[1].products.push(new Product(4, "Бургер Масала Чикен", 190, "г", 990, ''));
    this.tagWithProductsLists[3].tagWithProductsList[1].products.push(new Product(5, "Чизбургер", 210, "г", 990, ''));
    this.tagWithProductsLists[3].tagWithProductsList[1].products.push(new Product(6, "Бургер Каримен", 220, "г", 990, ''));

    this.tagWithProductsLists[4].tagWithProductsList.push(new TagWithProducts('drinks'));
    this.tagWithProductsLists[4].tagWithProductsList[0].products.push(new Product(7, "Бургер говяжий", 300, "г", 1190, 'assets/images/products/item13.jpeg'));
    this.tagWithProductsLists[4].tagWithProductsList[0].products.push(new Product(8, "Бургер говяжий Двойной", 390, "г", 1690, 'assets/images/products/item14.jpeg'));
    this.tagWithProductsLists[4].tagWithProductsList[0].products.push(new Product(9, "Бургер куриный", 300, "г", 990, 'assets/images/products/item15.jpeg'));
    this.tagWithProductsLists[4].tagWithProductsList.push(new TagWithProducts('pizza'));
    this.tagWithProductsLists[4].tagWithProductsList[1].products.push(new Product(1, "Пицца вегетарианская", 440, "г", 1990, 'assets/images/products/item16.jpeg'));
    this.tagWithProductsLists[4].tagWithProductsList[1].products.push(new Product(2, "Пицца Горгонзола с грушей", 420, "г", 2190, 'assets/images/products/item17.jpeg'));


    this.tagWithProductsLists[5].tagWithProductsList.push(new TagWithProducts('sets'));
    this.tagWithProductsLists[5].tagWithProductsList[0].products.push(new Product(4, "Сет Мацури", 1200, "г", 9990, 'assets/images/products/item18.jpeg'));
    this.tagWithProductsLists[5].tagWithProductsList[0].products.push(new Product(5, "Сет Покемон", 850, "г", 9990, 'assets/images/products/item19.jpeg'));
    this.tagWithProductsLists[5].tagWithProductsList.push(new TagWithProducts('sushi'));
    this.tagWithProductsLists[5].tagWithProductsList[1].products.push(new Product(3, "Суши с креветкой", 65, "г", 990, 'assets/images/products/item20.jpeg'));
    this.tagWithProductsLists[5].tagWithProductsList[1].products.push(new Product(4, "Суши с лососем", 65, "г", 990, 'assets/images/products/item21.jpeg'));


  }
}
