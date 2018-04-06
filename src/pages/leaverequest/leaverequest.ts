import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LombardService } from '../shared/services/lombard.service';
import { Lombard } from '../shared/models/lombard.model';
import { RequestService } from '../shared/services/request.service';
import { Request } from '../shared/models/request.model';
import { RequestDetailPage } from '../request-detail/request-detail';


@IonicPage()
@Component({
  selector: 'page-leaverequest',
  templateUrl: 'leaverequest.html',
})
export class LeaverequestPage {

  item: Lombard;

    categories = [
      {name: 'телефон'},
      {name: 'компьютер'},
      {name: 'недвижимость'},
      {name: 'авто'},
      {name: 'прочее'}
    ];


    name: string = '';
    price: string = '';
    info: string = '';
    status: string = '';
    category: string='';


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private lombardService: LombardService,
    private requestService: RequestService) {
      this.item = this.lombardService.selected;
  }


  addRequest() {
    let request: Request = {
      name: this.name,
      price: this.price,
      category: this.category,
      info: this.info,
      status: "Ожидаемые"
    };

    this.requestService.addRequest(request)
    .subscribe(res => {
        console.log(res);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaverequestPage');
  }

}
