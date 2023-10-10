import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Products';
import { NotificationService } from 'src/app/notification.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(id);
  }

  addToCart() {
    this.notificationService.notificationOn('Produto adicionado ao carrinho');
  }
}
