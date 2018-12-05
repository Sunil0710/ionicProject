import { Component } from '@angular/core';
import { NavController, IonicPage, ActionSheetController, NavParams } from 'ionic-angular';
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

  lastKeypress: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService,
    public actionSheetCtrl: ActionSheetController,
    private toast: ToastService
  ) {

      this.shoppingList$ = this.shopping
      .getFiltersList('')  // we can use getActiveItems() will return only actived Items
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => (
            {
              key: c.payload.key, ...c.payload.val()
            }
          )))
      );

      // this.shoppingList$.subscribe(x => console.log(x));
  }


  ionViewWillLoad() {
    console.log('title: '+ this.navParams.get('title'));

    var title = this.navParams.get('title');

    if(title){
      this.shoppingList$ = this.shopping
      .getSelectedLabelItems(title)
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
    
  }

  //filter items
  searchItems(event) {
    var val = event.target.value;
    // console.log(val.toLowerCase());
    // console.log(event.timeStamp);

    if(event.timeStamp - this.lastKeypress > 500){
        this.shoppingList$ = this.shopping.getFiltersList(val).snapshotChanges()
        .pipe(
        map(changes =>
          changes.map(c => (
            {
              key: c.payload.key, ...c.payload.val()
            }
          )))
      );
    }

    this.lastKeypress = event.timeStamp;
  }

  //to show the active items when user tries to search items form DB.
  showActive(item: any): any {
    // console.log(item);
    if(item.status === 'active'){
      return false;
    } 
    return true;
  }

  //more options
  moreOptions(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'More',
      buttons: [
        {
          text: 'Trash',
          role: 'destructive', // will always sort to be on the top
          handler: () => {
            console.log('Deleted task: ' +item.title);
            item.status = "trash";
            this.shopping.editItem(item).then(()=> {
              console.log(item.status);
              this.toast.show(`${item.title} trashed !`);
            }) 
          }
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Shared task: ' +item.title);
            this.toast.show(`${item.title} shared !`);
          }
        },
        {
          text: 'Archive',
          handler: () => {
            // console.log('Status : ' +item.status);
            // console.log('Item Name : ' +item.title);
            item.status = "archive";
            this.shopping.editItem(item).then(()=> {
              console.log(item.status);
              this.toast.show(`${item.title} archived !`);
              this.navCtrl.setRoot('HomePage');
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
