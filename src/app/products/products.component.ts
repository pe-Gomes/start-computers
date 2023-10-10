import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
