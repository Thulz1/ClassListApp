import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


import arrClass from '../../app/ArrayClass';
import { ClassMates } from '../../app/ClassMates';
import { ViewPage } from '../view/view';


@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  ;


  addUser(name, surname, id, gender, email, address) {
    let obj = new ClassMates(name, surname, id, gender, email, address);
    if (name != null &&
        surname != null &&
        id != null &&
        gender != null &&
        email != null &&
        address != null &&
        name != undefined &&
        surname != undefined &&
        id != undefined &&
        email != undefined &&
        address != undefined &&
        name != '' &&
        surname != '' &&
        id != '' &&
        email != '' &&
        address != ''
    ) {
      const alert = this.alertCtrl.create({
        title: 'Successful',
        subTitle: "Student has been added",
        buttons: [
          {
            text: 'ok',
            handler: data => {
              arrClass.push(obj);
              this.navCtrl.push(ViewPage);
              console.log(arrClass);
            }
          }
        ]
      });
      alert.present();
    } else {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Enter details on blank spaces',
        buttons: ["Okay"]
      });
      alert.present();
      console.log('false')
    }

  }


}


