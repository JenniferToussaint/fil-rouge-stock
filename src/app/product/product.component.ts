import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productName: string;
  @Input() productOnStock: string;
  @Input() productPicture: string;
  @Input() details: string;
  @Input() color: string;
  @Input() id: number;

  constructor(
   private Product: StockService
  ) { }

  ngOnInit() {
  }

  getOnStock(){
    return this.productOnStock;
  }

  // buyArticle(){
  //   console.log('Article acheté !');
  // }

  changeColor (){
    if(this.productOnStock == 'En stock') {
    return 'green';  
    }else if(this.productOnStock == 'Rupture de stock') {
      return 'red';

    }else{
      console.log('Error: Unexpected productOnStock value');
    }
  }

  removeProduct(id: any){
    this.Product.deleteProduct(id);
  }


  // onSwitch() {
  //   if(this.productOnStock == 'En stock') {
  //     this.Product.switchOnStock(this.index);
  //   }else if(this.productOnStock == 'Rupture de stock') {
  //     this.Product.switchOffStock(this.index);
  //   }else {
  //     console.log('Error : Unknow Stock type');
  //   }
  // }
 


}
