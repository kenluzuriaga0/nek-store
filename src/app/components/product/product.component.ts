import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  product: Product;

  @Output() productClicked:EventEmitter<any> = new EventEmitter();

  addCart(){
    console.log("agregando al carrito");
    this.productClicked.emit(this.product.id);
  }
}
