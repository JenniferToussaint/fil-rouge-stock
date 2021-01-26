import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-modif',
  templateUrl: './stock-modif.component.html',
  styleUrls: ['./stock-modif.component.css']
})
export class StockModifComponent implements OnInit {
  product: any;

  constructor(
    private Product: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.Product.getProductById(id).subscribe(res => {
      this.product = res;
    })
  }

  onModif() {
    this.Product.modifProduct(this.product).subscribe(res => {
      this.router.navigate(['/products']);
    })
  }

  removeProduct(id: any) {
    this.Product.deleteProduct(id);
  }

}
