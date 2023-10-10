import { Injectable } from '@angular/core';
import { ICartProduct } from './Products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICartProduct[] = [];

  constructor() {}

  getCartItems() {
    return JSON.parse(localStorage.getItem('cart') || '');
  }

  addItemToCart(product: ICartProduct) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  emptyCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }
}
