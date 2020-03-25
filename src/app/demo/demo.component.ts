import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
  title = 'store';
  items = ['juan', 'miguel'];

  ngOnInit(): void {
  }

  AgregarItem(item: string) {
    this.items.push(item);
  }

  BorrarItem(index: number) {
    this.items.splice(index, 1);
  }
}
