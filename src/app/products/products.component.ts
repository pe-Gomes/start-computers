import { Component } from '@angular/core';
import { IProduct, products } from '../Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: IProduct[] = products;
}
