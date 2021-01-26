import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private http: HttpClient
  ) { 
    this.getProduct();
  }



  productSubject = new Subject<any[]>();
  private products = [];
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }


getProduct(){
  this.http.get<any>('/api/products').subscribe((res) => {
    this.products = res;
    this.emitProductSubject();
  });
}

getProductById(id: number) {
  return this.http.get<any>('/api/products/' + id);
}

modifProduct(product:any) {
  var index = this.products.findIndex(
    (productToModif) => {
      if(productToModif._id == product._id) {
        return true;
      }
    }
  )
  this.products.splice(index, 1, product);
  this.emitProductSubject();
  return this.http.put<any>('/api/products/' + product._id, product, this.httpOptions);
}





  emitProductSubject(){
    this.productSubject.next(this.products.slice());
  }

  setOnStock() {
    for (const product of this.products) {
      product.statutStock = 'En stock';
    }
    this.emitProductSubject();
  }

  setOffStock() {
    for (const product of this.products) {
      product.statutStock = 'Rupture de stock';
    }
    this.emitProductSubject();
  }

  switchOnStock(index: number) {
    this.products[index].statutStock='En stock';
    this.emitProductSubject();

  }

  switchOffStock(index: number) {
    this.products[index].statutStock='Rupture de stock';
    this.emitProductSubject();

  }


  addProduct(product: any) {
    this.http.post<any>('/api/products', product, this.httpOptions).subscribe(res => {
      this.products.push(res);
      this.emitProductSubject();
    });
  }

  deleteProduct(id: any) {
    this.http.delete<any>('/api/products/' + id).subscribe(res => {
      var index = this.products.findIndex(
        (productToDelete) => {
          if(productToDelete._id == id) {
            return true;
          }
        }
      )
      this.products.splice(index, 1);
      this.emitProductSubject();
    })
  }

}
