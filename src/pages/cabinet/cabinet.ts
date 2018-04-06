import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Login } from '../shared/models/login.model';

@Component({
  selector: 'page-cabinet',
  templateUrl: 'cabinet.html'
})
export class CabinetPage {

  
  user: any = JSON.parse(localStorage.getItem("login"));

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public app: App) {
    console.log(localStorage.getItem("login"));
  }

  logoutClicked() {
    console.log("Logout");
    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }
}


