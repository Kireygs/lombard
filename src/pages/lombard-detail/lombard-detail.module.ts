import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LombardDetailPage } from './lombard-detail';

@NgModule({
  declarations: [
    LombardDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LombardDetailPage),
  ],
})
export class LombardDetailPageModule {}
