import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto.model';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  productos: Producto[];

  ngOnInit(): void {
    this.productos = this.productsService.getAllProducts();
  }

  deleteProduct(id: number) {
    let i = this.productos.findIndex(x => x.id === id);
    this.productos.splice(i, 1);
  }

  productClick(id: number) {
    console.log('Producto: ' + id);
  }
}
