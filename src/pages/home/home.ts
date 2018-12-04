import { Component } from '@angular/core';
import { NavController, IonicPage, ActionSheetController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item/item.model';
import { ToastService } from '../../services/toast/toast-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private shopping: ShoppingListService,
    public actionSheetCtrl: ActionSheetController,
    private toast: ToastService
  ) {

      this.shoppingList$ = this.shopping
      .getShoppingList()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => (
            {
              key: c.payload.key, ...c.payload.val()
            }
          )))
      );

      console.log(this.shoppingList$);
  }

  //more options
  moreOptions(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'More',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive', // will always sort to be on the top
          handler: () => {
            console.log('Deleted task: ' +item.title);
            this.shopping.removeItem(item).then(() => {
              this.toast.show(`${item.title} deleted !`);
              this.navCtrl.setRoot('HomePage');
            });
          }
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Shared task: ' +item.title);
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archived task: ' +item.title);
            console.log('Archived task key: ' +item.key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present(); //presenting the action sheet.
  }

}
