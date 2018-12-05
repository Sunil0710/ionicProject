import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { ToastService } from '../../services/toast/toast-service';


@IonicPage()
@Component({
  selector: 'page-trashed-details',
  templateUrl: 'trashed-details.html',
})
export class TrashedDetailsPage {

  item: Item

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item);
  }

  restoreItem(item){
    console.log(item);
    item.status = "active";
    this.shopping.editItem(item).then(() => {
      //console.log(item.status);
      this.toast.show(`${item.title} restored !`);
      this.navCtrl.pop();
    })
  }

  deleteItem(item){
    this.shopping.removeItem(item).then(() => {
      this.toast.show(`${item.title} deleted !`);
      //this.navCtrl.setRoot('HomePage');
    });
  }

}
