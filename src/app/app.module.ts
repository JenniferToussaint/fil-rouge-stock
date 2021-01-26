import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { StockService } from './services/stock.service';
import { StockModifComponent } from './stock-modif/stock-modif.component';
import { StockNewComponent } from './stock-new/stock-new.component';
import { HomeComponent } from './home/home.component';
import { StockListComponent } from './stock-list/stock-list.component'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
{
  path: 'products',
  component: StockListComponent
},
{
  path: 'new',
  component: StockNewComponent
},
{
  path:'modif/:id',
  component: StockModifComponent
},
{
  path: '',
  component: HomeComponent
}


]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StockModifComponent,
    StockNewComponent,
    HomeComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
