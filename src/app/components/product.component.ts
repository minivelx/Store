import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Producto } from '../Producto.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductoComponent implements OnDestroy {
    @Input() producto: Producto;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    @Output() productDeleted: EventEmitter<any> = new EventEmitter();

    ngOnDestroy() {
        console.log('Destruyendo producto: ' + this.producto.id);
    }

    addCart() {
        console.log('asd');
        this.productClicked.emit(this.producto.id);
    }

    deleteProduct() {
        this.productDeleted.emit(this.producto.id);
    }
}
