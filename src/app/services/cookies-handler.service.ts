import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookiesHandlerService {

  private foodItemsSubject = new BehaviorSubject<{ name: string; calories: string }[]>([]);
  foodItems$ = this.foodItemsSubject.asObservable();

  constructor(private cookieService: CookieService) {
    this.loadCookies();
  }

  loadCookies() {
    const keys = this.cookieService.getAll();
    const foodItems: { name: string; calories: string }[] = [];

    for (const key in keys) {
      if (key.startsWith('foodName')) {
        const foodName = keys[key];
        const index = key.replace('foodName', '');
        const foodCalories = this.cookieService.get(`foodCalories${index}`);
        foodItems.push({ name: foodName, calories: foodCalories });
      }
    }

    this.foodItemsSubject.next(foodItems);
  }

  addFoodItem(name: string, calories: string) {
    const existingItem = this.cookieService.get(`foodName${name}Cookie`);
    if (!existingItem) {
      this.cookieService.set(`foodName${name}Cookie`, name);
      this.cookieService.set(`foodCalories${name}Cookie`, calories);
      this.loadCookies(); // Обновляем список после добавления
    } else {
      alert('Продукт с таким названием уже существует в cookies');
    }
  }
  // private foodItemsSubject = new BehaviorSubject<{ name: string; calories: string }[]>([]);
  // foodItems$ = this.foodItemsSubject.asObservable();

  // constructor(private cookieService: CookieService) {
  //   this.loadCookies();
  // }

  // loadCookies() {

  //   const cookiesKeys = this.cookieService.getAll();

  //   for (const key in cookiesKeys) {

  //     if (key.startsWith('foodName')) {

  //       const foodName = cookiesKeys[key];
  //       const foodCalories = this.cookieService.get(`foodCalories${foodName}Cookie`);

  //       this.cookiesList.push(new CookiesList(foodName, foodCalories));
  //     }
  //   }
  //   this.foodItemsSubject.next(cookiesList);
  // }

  // addProduct() {

  //     const foodNameCookie = this.cookieService.get(`foodName${formValues.foodName}Cookie`);

  //     if (!foodNameCookie) {
  //       // this.productsList.push(new ProductsList(formValues.foodName, formValues.foodCalories))

  //       this.cookieService.set(`foodName${formValues.foodName}Cookie`, formValues.foodName);
  //       this.cookieService.set(`foodCalories${formValues.foodName}Cookie`, formValues.foodCalories);

  //       console.log('Данные из формы отправлены, а также записаны в cookies', formValues);

  //       this.loadCookies();
  //       } else {

  //         alert('Продукт с таким названием уже существует в cookies');
  //       }
  //     }
  }
