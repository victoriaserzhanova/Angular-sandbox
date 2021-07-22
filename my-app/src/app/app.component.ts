import { Component } from '@angular/core';
import { product, products } from './data/product.data';
import { Product } from './types/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  product: Product = product
}
