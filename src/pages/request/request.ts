import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestService } from '../shared/services/request.service';
import { Request } from '../shared/models/request.model';
import { RequestDetailPage } from '../request-detail/request-detail';



@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  type: string = 'waiting';
  items: Request;
  requests: [1,2];

  cancelleds: Request;
  waitings: Request;
  accepteds: Request;


  constructor(public navCtrl: NavController, public navParams: NavParams,
     private requestService: RequestService) {
      this.requestService.getRequests().subscribe(data => { 
        this.items = data;
      });

      this.requestService.getRequestByStatus('Отклоненные').subscribe(data => {
        this.cancelleds = data;
      });

      this.requestService.getRequestByStatus('Ожидаемые').subscribe(data => {
        this.waitings = data;
      });

      this.requestService.getRequestByStatus('Одобренные').subscribe(data => {
        this.accepteds = data;
      });
  }



  itemSelected(item: Request) {
    this.requestService.selected = item;
    this.navCtrl.push(RequestDetailPage);
  }


}
