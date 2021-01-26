import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  products:any = [];

  productSubscription: Subscription;


  constructor(
    private Product: StockService
  ) { }

  ngOnInit() {
    this.productSubscription = this.Product.productSubject.subscribe((listProduct) =>{
      this.products = listProduct
    });
    this.Product.emitProductSubject();
  }


  ngOnDestroy(){
    this.productSubscription.unsubscribe();
  }

  // setOnStockAll(){
  //   this.Product.setOnStock();
  // }

  // setOffStockAll(){
  //   this.Product.setOffStock();
  // }

}
