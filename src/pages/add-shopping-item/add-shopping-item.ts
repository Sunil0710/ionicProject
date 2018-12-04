import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, FabContainer, normalizeURL, PopoverController } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastService } from '../../services/toast/toast-service';
import { PopoverComponent } from '../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    title: '',
    label: '',
    listedItems: [],
    strikedItems: []
  };

  public photos: any;
  public base64Image: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private shopping: ShoppingListService,
    private toast: ToastService,
    public popoverCtrl: PopoverController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
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
    console.log(this.item);
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
  //   this.toast.show(`archived`).then(() => {
  //     this.navCtrl.setRoot('HomePage');
  //   });
  // }

  //delete toast
  // deleteToast(){
  //   this.toast.show(`deleted`).then(() => {
  //     this.navCtrl.setRoot('HomePage');
  //   });

    // this.toast.onDidDismiss(()=> {
    //   this.navCtrl.setRoot('HomePage');
    // });

  // }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {
      console.log(popoverData);
      this.item.label = popoverData.value;
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

  //submit item to DB
  submitItem(newItem: Item){
    this.shopping.addItem(newItem).then( ref => {
          this.navCtrl.setRoot('HomePage', {key: ref.key});
        });
  }

}
