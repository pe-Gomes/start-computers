import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartProduct } from '../Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: ICartProduct[] = [];
  cartPrice: number = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.getCartPrice();
  }

  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.cartService.removeItemFromCart(id);
    this.getCartPrice();
  }

  getCartPrice(): number {
    return (this.cartPrice = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.orderQuantity,
      0
    ));
  }

  buy() {
    alert('Você comprou os produtos!');
    this.cartItems = [];
    this.cartService.emptyCart();
  }
}
