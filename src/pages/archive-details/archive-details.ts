import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { ToastService } from '../../services/toast/toast-service';

@IonicPage()
@Component({
  selector: 'page-archive-details',
  templateUrl: 'archive-details.html',
})
export class ArchiveDetailsPage {

  item: Item;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService
  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item);
  }

  unArchiveItem(item: Item){
    console.log(item);
    item.status = "active";
    this.shopping.editItem(item).then(() => {
      //console.log(item.status);
      this.toast.show(`${item.title} un-archived !`);
      this.navCtrl.pop();
    })
  }

  trashItem(item: Item){
    console.log(item);
    item.status = "trash";
    this.shopping.editItem(item).then(() => {
      //console.log(item.status);
      this.toast.show(`${item.title} trashed !`);
      this.navCtrl.pop();
    })
  }

}
