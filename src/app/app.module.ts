import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';

import { LombardPage } from '../pages/lombard/lombard';
import { RequestPage } from '../pages/request/request';
import { AuthorPage } from '../pages/author/author';
import { ProductPage } from '../pages/product/product';


import { LeaverequestPage } from '../pages/leaverequest/leaverequest';

import { LombardDetailPage } from '../pages/lombard-detail/lombard-detail';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { RequestDetailPage } from '../pages/request-detail/request-detail';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Headers, Response} from '@angular/http';

import { LombardService } from '../pages/shared/services/lombard.service';
import { RequestService } from '../pages/shared/services/request.service';
import { LoginPage } from '../pages/login/login';
import { LoginService } from '../pages/shared/services/login.service';
import { CabinetPage } from '../pages/cabinet/cabinet';
import { ProductService } from '../pages/shared/services/product.service';




@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CabinetPage,
    LombardPage,
    RequestPage,
    ProductPage,
    AuthorPage,
    LombardDetailPage,
    LeaverequestPage,
    RequestDetailPage,
    ProductDetailPage,
    LoginPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRFF_rj0_8dkBaFiPSsx69W-DbBDlgATY'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CabinetPage,
    LombardPage,
    RequestPage,
    ProductPage,
    AuthorPage,
    LombardDetailPage,
    LeaverequestPage,
    RequestDetailPage,
    LoginPage,
    ProductDetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LombardService,
    RequestService,
    LoginService,
    ProductService
  ]
})
export class AppModule {}
