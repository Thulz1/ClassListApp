import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { ViewAllPage} from '../view-all/view-all'

import arrClass from '../../app/ArrayClass';
import arrIndx from '../../app/index';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  arr = arrClass;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  value;

  number()
  {
  
      this.navCtrl.push(EditPage);
  }

  block(b){
    console.log(b);

  }

  update(b)
  {
      console.log(b);
      
      console.log(arrIndx);
      arrIndx.splice(0,1,b);
      if(arrIndx!=null)
      {
        this.navCtrl.push(ViewAllPage);
      }
     


  }



}
