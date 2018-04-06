import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LombardService } from '../shared/services/lombard.service';
import { Lombard } from '../shared/models/lombard.model';
import { LombardDetailPage } from '../lombard-detail/lombard-detail';



@IonicPage()
@Component({
  selector: 'page-lombard',
  templateUrl: 'lombard.html',
})
export class LombardPage {

  items: Lombard;
  lombards: [1,2];

  lat: number = 43.238949;
  lng: number = 76.889709;

  type = 'list';

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private lombardService: LombardService) {
      this.lombardService.getLombards().subscribe(data => { 
        this.items = data;
      });
  }

  itemSelected(item: Lombard) {
    this.lombardService.selected = item;
    this.navCtrl.push(LombardDetailPage);
  }


}
