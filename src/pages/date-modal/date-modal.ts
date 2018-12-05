import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-date-modal',
  templateUrl: 'date-modal.html',
})
export class DateModalPage {
  
  event = { startTime: new Date().toISOString()};
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.event.startTime = moment(new Date().toISOString()).format();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateModalPage');
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.viewCtrl.dismiss(this.event);
  }

}
