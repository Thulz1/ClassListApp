import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAllPage } from './view-all';

@NgModule({
  declarations: [
    ViewAllPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAllPage),
  ],
})
export class ViewAllPageModule {}
