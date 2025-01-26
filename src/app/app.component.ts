import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AddProductFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
