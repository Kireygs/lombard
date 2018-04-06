import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../shared/services/login.service';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = '';
  password: string = '';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService,
     private alertCtrl: AlertController) {
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Введите заново',
      subTitle: 'Логин или пароль введен не правильно',
      buttons: ['Ок']
    });
    alert.present();
  }

  signIn() {
    this.loginService.loginByUsernameAndPassword({"where":{"and":[{"login": this.username},{"password": this.password}]}})
      .subscribe(data => {
        if (data[0] && data[0].login == this.username && data[0].password == this.password) {
          localStorage.setItem("login", JSON.stringify(data[0]));
          this.navCtrl.setRoot(TabsPage);
        }else{
          this.presentAlert()
          console.log("ERROR");
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
