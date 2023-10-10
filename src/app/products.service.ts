import { Injectable } from '@angular/core';
import { IProduct, products } from './Products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = products;

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id == id);
  }
}
