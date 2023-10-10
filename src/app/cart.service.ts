import { Injectable } from '@angular/core';
import { ICartProduct } from './Products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICartProduct[] = [];

  constructor() {}

  getCartItems() {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.items;
  }

  addItemToCart(product: ICartProduct) {
    const alreadyAdded = this.items.find((item) => item.id === product.id);
    let filteredItems = this.items.filter((item) => item.id !== product.id);

    if (alreadyAdded) {
      const editedItem = {
        ...alreadyAdded,
        orderQuantity: alreadyAdded.orderQuantity + product.orderQuantity,
      };
      filteredItems.push(editedItem);
      this.items = filteredItems;
    } else {
      this.items.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
  removeItemFromCart(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  emptyCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }
}
