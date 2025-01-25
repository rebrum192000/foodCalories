import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, AddProductFormComponent, TuiRoot],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
