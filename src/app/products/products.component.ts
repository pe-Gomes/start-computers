import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] | undefined;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const products = this.productService.getAllProducts();

    this.route.queryParamMap.subscribe((query) => {
      const description = query.get('description')?.toLowerCase();

      if (description) {
        this.products = products.filter((p) =>
          p.description.toLowerCase().includes(description)
        );
        return;
      }
      this.products = products;
    });
  }
}
