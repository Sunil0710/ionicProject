import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, FabContainer, normalizeURL, PopoverController, ModalController, ActionSheetController } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PopoverComponent } from '../../components/popover/popover';

import { bounce } from '../../app/animations';
import { ToastService } from '../../services/toast/toast-service';

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
  animations: [
    bounce
  ]
})
export class EditItemPage {

  // item: Item;
  item: Item;

  public photos: any;
  public base64Image: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private shopping: ShoppingListService,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private toast: ToastService
  ) {

  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('item'));
  }

  // adding items to listedItems
  addItem(newItem: string) {
    if (newItem) {
      this.item.listedItems.push(
        {
          title: newItem,
          checkItem: false
        }
      );
    }
  }

  // remove items from listedItems and add them to strikedItems
  updateListedItems(newItem) {
    if (this.item.strikedItems === undefined) {
      this.item.strikedItems = [];
    }

    this.item.strikedItems.push(
      {
        title: newItem.title,
        checkItem: true
      }
    );

    this.item.listedItems.splice(this.item.listedItems.indexOf(newItem), 1);
  }

  //remove items from strikedItems and add them to listedItems
  updateStrikedItems(newItem) {

    if (this.item.listedItems === undefined) {
      this.item.listedItems = [];
    }

    this.item.listedItems.push(
      {
        title: newItem.title,
        checkItem: false
      }
    );

    this.item.strikedItems.splice(this.item.strikedItems.indexOf(newItem), 1);
  }

  //delete items from listedItems
  deleteListedItem(newItem) {
    this.item.listedItems.splice(this.item.listedItems.indexOf(newItem), 1);
  }

  //delete items from strikedItems
  deleteStrikedItem(newItem) {
    this.item.strikedItems.splice(this.item.strikedItems.indexOf(newItem), 1);
  }

  //reorder items
  reorderItem(indexes) {
    console.log(indexes);
    this.item.listedItems = reorderArray(this.item.listedItems, indexes);
  }

  presentPopover(myEvent, fab: FabContainer) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {

      if(popoverData){
        this.item.label = popoverData.value;
      } else {
        this.item.label = this.item.label;
      }

      //fab.close();
    });
  }

  //add to Calendar
  addToCalendar(event, fab: FabContainer) {
    console.log('add calendar event');

    let modal = this.modalCtrl.create('DateModalPage');

    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        console.log(data.startTime);
        this.item.startDate = data.startTime;
        //fab.close();
      }
    });
  }

  //remove calendar Date
  removeFromCal() {
    console.log("remove item from calendar");
    this.item.startDate = "";
  }

  //more options
  moreOptions(item) {
    console.log(item);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'More',
      buttons: [
        {
          text: 'Trash',
          role: 'destructive', // will always sort to be on the top
          handler: () => {
            console.log('Deleted task: ' + item.title);
            item.status = "trash";
            this.shopping.editItem(item).then(()=> {
              console.log(item.status);
              this.toast.show(`${item.title} trashed !`);
              this.navCtrl.setRoot('HomePage');
            }) 
          }
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Shared task: ' + item.title);
            this.toast.show(`${item.title} shared !`);
          }
        },
        {
          text: 'Archive',
          handler: () => {
            // console.log('Status : ' +item.status);
            // console.log('Item Name : ' +item.title);
            item.status = "archive";
            this.shopping.editItem(item).then(() => {
              console.log(item.status);
              this.toast.show(`${item.title} archived !`);
              this.navCtrl.setRoot('HomePage');
              //this.navCtrl.pop();
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

  //using camera
  takePicture(event, fab: FabContainer) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {

      console.log(imageData);
      //this.base64Image = this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
      this.base64Image = normalizeURL(imageData);

      this.photos.push(this.base64Image);
      this.photos.reverse();
      //fab.close();
    }, (err) => {
      //fab.close();
      console.log(err);

    });
  }

  //delete photo
  deletePhoto(index) {
    this.photos.splice(index, 1);
  }

  //save changes to DB 
  saveItem(item: Item) {
    this.shopping.editItem(item).then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
