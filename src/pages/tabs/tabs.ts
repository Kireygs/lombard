import { Component } from '@angular/core';

import { LombardPage } from '../lombard/lombard';
import { RequestPage } from '../request/request';
import { ProductPage } from '../product/product';
import { AuthorPage } from '../author/author';
import { CabinetPage } from '../cabinet/cabinet';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = CabinetPage;
  tab2Root = LombardPage;
  tab3Root = RequestPage;
  tab4Root = ProductPage;
  tab5Root = AuthorPage;
  

  constructor() {

  }
}
