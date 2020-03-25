import { Injectable } from '@angular/core';
import { Producto } from '../../../Producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camiseta',
      descripcion: 'Camiseta de prueba',
      precio: 80000,
      imagen: 'assets/images/camiseta.png'
    },
    {
      id: 2,
      nombre: 'Hoodie',
      descripcion: 'Hoodie de prueba',
      precio: 80000,
      imagen: 'assets/images/hoodie.png'
    },
    {
      id: 3,
      nombre: 'Mug',
      descripcion: 'mug de prueba',
      precio: 80000,
      imagen: 'assets/images/mug.png'
    },
    {
      id: 4,
      nombre: 'Pin',
      descripcion: 'Pin de prueba',
      precio: 80000,
      imagen: 'assets/images/pin.png'
    },
    {
      id: 5,
      nombre: 'Stickers',
      descripcion: 'stickers de prueba',
      precio: 80000,
      imagen: 'assets/images/stickers1.png'
    },
    {
      id: 6,
      nombre: 'Stickers2',
      descripcion: 'stickers de prueba',
      precio: 80000,
      imagen: 'assets/images/stickers2.png'
    }
  ];

  getAllProducts(){
    return this.productos;
  }

  getProduct(id: number): Producto {
    return this.productos.find(x => x.id == id);
  }
}
