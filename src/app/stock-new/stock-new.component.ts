import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-new',
  templateUrl: './stock-new.component.html',
  styleUrls: ['./stock-new.component.css']
})
export class StockNewComponent implements OnInit {

  newProduct:any;

  constructor(

    private Product: StockService,
    private router: Router

  ) { }

  ngOnInit() {

    this.newProduct = {
      title: null,
      picture: null,
      statutStock: null,
      details: null,
      color: null
    };


  }



  onSaveProduct() {
    this.Product.addProduct(this.newProduct);
    this.router.navigate(['/products']);
  }


}

