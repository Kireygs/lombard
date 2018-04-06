import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LombardService } from '../shared/services/lombard.service';
import { Lombard } from '../shared/models/lombard.model';
import { LeaverequestPage } from '../leaverequest/leaverequest';

/**
 * Generated class for the LombardDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lombard-detail',
  templateUrl: 'lombard-detail.html',
})
export class LombardDetailPage {

    item: Lombard;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private lombardService: LombardService) {
      this.item = this.lombardService.selected;
  }

  leaveRequest(){
    this.navCtrl.push(LeaverequestPage);
  }


}
