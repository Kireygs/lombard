import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestService } from '../shared/services/request.service';
import { Request } from '../shared/models/request.model';
import { RequestPage } from '../../pages/request/request';
import { Lombard } from '../shared/models/lombard.model';
import { LombardService } from '../shared/services/lombard.service';


@IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {

    item: Request;
    lombard: Lombard;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private requestService: RequestService, private lombardService: LombardService) {
      this.item = this.requestService.selected;
      this.lombard = this.lombardService.selected;
  }


  cancelRequest(id: string){
    this.requestService.deletRequest(id);
    this.navCtrl.setRoot(RequestPage);
}

}
