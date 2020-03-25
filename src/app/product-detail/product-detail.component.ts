import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../core/services/products/products.service';
import { Producto } from '../Producto.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  product: Producto;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.productsService.getProduct(params.id);
    });
  }
}
