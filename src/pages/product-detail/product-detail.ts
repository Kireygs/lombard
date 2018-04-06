import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../shared/services/product.service';
import { Products } from '../shared/models/product.model';


@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

    item: Products;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private productService: ProductService) {
      this.item = this.productService.selected;
  }



}
