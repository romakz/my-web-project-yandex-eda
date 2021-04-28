import { Injectable } from '@angular/core';
import {Restaurant} from '../my-objects/restaurant';
import {LoggerService} from './logger.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestaurantService {
  private api = 'http://localhost:3000/restaurants';

  constructor(
    private loggerService: LoggerService,
    private http: HttpClient
  ) {
    // this.restaurants.push(new Restaurant(1, 'Nori', 4.9, ['sets', 'sushi', 'drinks'], 'assets/images/restaurants/restaurant1.jpg', 1500, 1500, 990));
    // this.restaurants.push(new Restaurant(2, 'Mr. Burger', 4.4, ['combos', 'burgers'], 'assets/images/restaurants/restaurant2.jpg',  1500, 1500, 990));
    // this.restaurants.push(new Restaurant(3, 'Coffeessimo', 4.7, ['coffees', 'teas'], 'assets/images/restaurants/restaurant3.jpg',  1500, 1500, 990));
    // this.restaurants.push(new Restaurant(4, 'Burger Station', 4.8, ['burgers', 'drinks'], 'assets/images/restaurants/restaurant4.jpg', 1500, 1500, 990));
    // this.restaurants.push(new Restaurant(5, 'Шеф Бургер', 4.3, ['burgers', 'pizza'], 'assets/images/restaurants/restaurant5.jpeg', 1500, 1500, 990));
    // this.restaurants.push(new Restaurant(6, 'Киото Суши', 4.2, ['sets', 'sushi'], 'assets/images/restaurants/restaurant6.jpg', 1500, 1500, 990));
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.api);
  }

  getRestaurantById(id: number) {
    this.loggerService.doLog('not fount restaurant by id=' + id);
    return this.http.get<Restaurant>(this.api + `/${id}`);
  }

  getRestaurantsByTag(tag: string): Observable<Restaurant[]> {
    this.loggerService.doLog('Get restaurants by tag=' + tag);
    return this.http.get<Restaurant[]>(this.api + '?productListType_like=' + tag);
  }

  getRestaurantsByName(name: string): Observable<Restaurant[]> {
    this.loggerService.doLog('get restaurant by name=' + name);
    return this.http.get<Restaurant[]>(this.api + '?productListType_like=' + name);
  }
}
