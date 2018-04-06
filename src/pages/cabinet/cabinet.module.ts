import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CabinetPage } from './cabinet';

@NgModule({
  declarations: [
    CabinetPage,
  ],
  imports: [
    IonicPageModule.forChild(CabinetPage),
  ],
})
export class CabinetPageModule {}
