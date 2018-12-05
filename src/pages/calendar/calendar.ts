import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item/item.model';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  shoppingList$: Observable<Item[]>;

  eventSource = []; // event source
  viewTitle: string;
  selectedDay = new Date();
  isToday: boolean;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService,
    public alertCtrl: AlertController) {
    this.isToday = true;

    this.shoppingList$ = this.shopping
      .getActiveItems()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => (
            {
              key: c.payload.key, ...c.payload.val()
            }
          )))
      );

    //fetching the event title and startDate and intigrate with calendar eventSource 
    var events = []
    this.shoppingList$.subscribe(data => {

      console.log(data);

      data.forEach(items => {
        events.push(
          {
            title: items.title,
            startTime: new Date(items.startDate),
            endTime: new Date(items.startDate),
            allDay: true
          }
        );
      });
      //console.log(events);
      this.eventSource = events;
    });
  }

  // On Current Date Changed
  onCurrentDateChanged(date) {
    if (date.getDate() != this.calendar.currentDate.getDate()) {
      this.isToday = false;
    } else {
      this.isToday = true;
    }
  }

  // event Selcted
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    });

    alert.present();
  }

  //view Title Changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Time Selected
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}
