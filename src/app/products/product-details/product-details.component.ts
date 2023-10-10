import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICartProduct, IProduct } from 'src/app/Products';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  quantity: number = 1;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(id);
  }

  addToCart() {
    this.notificationService.notificationOn('Produto adicionado ao carrinho');
    console.log(this.quantity);
    const cartProduct: ICartProduct = {
      ...this.product!,
      orderQuantity: this.quantity,
    };
    this.cartService.addItemToCart(cartProduct);
  }
}
