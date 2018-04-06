import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Products } from '../shared/models/product.model';
import { ProductService } from '../shared/services/product.service';
import { ProductDetailPage } from '../product-detail/product-detail';




@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  items: Products;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private productService: ProductService) {
      this.productService.getProducts().subscribe(data => { 
        this.items = data;
      });
  }

  itemSelected(item: Products) {
    this.productService.selected = item;
    this.navCtrl.push(ProductDetailPage);
  }


}
