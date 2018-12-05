import { Component } from '@angular/core';
import { NavController, IonicPage, ActionSheetController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item/item.model';
import { ToastService } from '../../services/toast/toast-service';


@IonicPage()
@Component({
  selector: 'page-trash',
  templateUrl: 'trash.html',
})
export class TrashPage {

  shoppingList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private shopping: ShoppingListService,
    private toast: ToastService,
    public actionSheetCtrl: ActionSheetController
  ) {

    this.shoppingList$ = this.shopping
      .getTrashItems()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => (
            {
              key: c.payload.key, ...c.payload.val()
            }
          )))
      );
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
            console.log('trashed item: ' + item.title);
            this.shopping.removeItem(item).then(() => {
              this.toast.show(`${item.title} deleted !`);
              //this.navCtrl.setRoot('HomePage');
            });
          }
        },
        {
          text: 'Recover',
          handler: () => {
            item.status = "active";
            this.shopping.editItem(item).then(() => {
              console.log(item.status);
              this.toast.show(`${item.title} re-stored !`);
              //this.navCtrl.setRoot('ArchivePage');
            })
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
