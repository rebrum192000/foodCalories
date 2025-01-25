import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import {TuiChip} from '@taiga-ui/kit';
import { CookiesHandlerService } from '../services/cookies-handler.service';

class ProductsList{
  constructor(public foodName: string, public foodCalories: number) {}
}
class CookiesList{
  constructor(public foodNameCookie: string, public foodCaloriesCookie: number | string) {}
}

@Component({
    selector: 'app-add-product-form',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiChip],
    providers: [CookieService],
    templateUrl: './add-product-form.component.html',
    styleUrl: './add-product-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddProductFormComponent implements OnInit {

  foodItems: { name: string; calories: string }[] = [];

  constructor(private cookieHandlerService: CookiesHandlerService) {}

  ngOnInit() {
    this.cookieHandlerService.foodItems$.subscribe((items) => {
      this.foodItems = items;
    });
  }

  addFood(name: string, calories: string) {
    this.cookieHandlerService.addFoodItem(name, calories);
  }
}
//   // myForm: FormGroup;
//   // productsList: ProductsList[] = [];
//   // foodName: string = '';
//   // foodCalories: number = 1;
//   // cookiesList: CookiesList[] = [];

//   // constructor(private cookieService: CookieService){
//   //   this.myForm = new FormGroup({
//   //     "foodName": new FormControl("", Validators.required),
//   //     "foodCalories": new FormControl("", Validators.required)
//   //   });
//   //   this.loadCookies();
//   // }

//   // addProduct() {

//   //   if (this.myForm.valid) {
//   //     const formValues = this.myForm.value;
//   //     const foodNameCookie = this.cookieService.get(`foodName${formValues.foodName}Cookie`);

//   //     if (!foodNameCookie) {
//   //       this.productsList.push(new ProductsList(formValues.foodName, formValues.foodCalories))

//   //       this.cookieService.set(`foodName${formValues.foodName}Cookie`, formValues.foodName);
//   //       this.cookieService.set(`foodCalories${formValues.foodName}Cookie`, formValues.foodCalories);

//   //       console.log('Данные из формы отправлены, а также записаны в cookies', formValues);
//   //       } else {

//   //         alert('Продукт с таким названием уже существует в cookies');
//   //       }
//   //     }  else {
//   //       alert('Форма заполнена неверно');
//   //     }


//   // }

//   // loadCookies() {

//   //   const cookiesKeys = this.cookieService.getAll();

//   //   for (const key in cookiesKeys) {

//   //     if (key.startsWith('foodName')) {

//   //       const foodName = cookiesKeys[key];
//   //       const foodCalories = this.cookieService.get(`foodCalories${foodName}Cookie`);

//   //       this.cookiesList.push(new CookiesList(foodName, foodCalories));
//   //     }

//   //   }
//   // }
// }
