import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, reorderArray, FabContainer, normalizeURL, PopoverController } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PopoverComponent } from '../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
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
    private toastCtrl: ToastController,
    private shopping: ShoppingListService,
    public popoverCtrl: PopoverController
  ) {
    
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad(){
    console.log(this.navParams.get('item'));
  }

  // adding items to listedItems
  addItem(newItem: string){
    if(newItem){
      this.item.listedItems.push(
        {
          title: newItem,
          checkItem: false
        }
      );
    }
  }

  // remove items from listedItems and add them to strikedItems
  updateListedItems(newItem){
    if(this.item.strikedItems === undefined){
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
  updateStrikedItems(newItem){

    if(this.item.listedItems === undefined){
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
  deleteListedItem(newItem){
    this.item.listedItems.splice(this.item.listedItems.indexOf(newItem),1);
  }

  //delete items from strikedItems
  deleteStrikedItem(newItem){
    this.item.strikedItems.splice(this.item.strikedItems.indexOf(newItem),1);
  }

  //reorder items
  reorderItem(indexes) {
    console.log(indexes);
    this.item.listedItems = reorderArray(this.item.listedItems, indexes);
  }

  //archive toast
  // arhiveToast(){
  //   const toast = this.toastCtrl.create({
  //     message: 'note was archived successfully',
  //     position: 'bottom',
  //     duration: 1000
  //   });

  //   toast.onDidDismiss(()=> {
  //     this.navCtrl.setRoot('HomePage');
  //   });

  //   toast.present();
  // }

  //delete toast
  // deleteToast(){
  //   const toast = this.toastCtrl.create({
  //     message: 'note was deleted successfully',
  //     position : 'bottom',
  //     duration: 1000
  //   });

  //   toast.onDidDismiss(()=> {
  //     this.navCtrl.setRoot('HomePage');
  //   });

  //   toast.present();
  // }

  presentPopover(myEvent, fab: FabContainer) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {
      this.item.label = popoverData.value;
      fab.close();
    });
  }

  //using camera
  takePicture(event, fab: FabContainer){
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

      console.log(this.base64Image);

      this.photos.push(this.base64Image);
      this.photos.reverse();
      fab.close();
    }, (err) => {
      fab.close();
      console.log(err);
      
    });
  }

  //delete photo
  deletePhoto(index){
    this.photos.splice(index, 1);
  }

  //save changes to DB 
  saveItem(item: Item){
    this.shopping.editItem(item).then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
