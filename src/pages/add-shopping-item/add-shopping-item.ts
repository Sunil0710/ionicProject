import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, FabContainer, normalizeURL, PopoverController, ModalController } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PopoverComponent } from '../../components/popover/popover';

import { bounce } from '../../app/animations';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
  animations:[
    bounce
  ]
})
export class AddShoppingItemPage {

  item: Item = {
    title: '',
    label: '',
    status: '',
    startDate: '',
    listedItems: [],
    strikedItems: [],
  };

  public photos: any;
  public base64Image: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private shopping: ShoppingListService,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
  ) {
    this.photos = [];
    this.item.status = "active";
    //this.item.startDate = new Date().toISOString();
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

  // add labels to item
  presentPopover(myEvent, fab: FabContainer) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData => {
      console.log(popoverData);
      // this.item.label = popoverData;
      this.item.label = popoverData.value;
      //fab.close();
    });
  }

  //add to Calendar
  addToCalendar(event, fab: FabContainer){
    console.log('add calendar event');
    let modal = this.modalCtrl.create('DateModalPage');

    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        console.log(data.startTime);
        this.item.startDate = data.startTime;
        //fab.close();
      } else {
        this.item.startDate = '';
      }

      console.log(new Date(data.startTime));
    });
  }

  //remove calendar Date
  removeFromCal(){
    console.log("remove item from calendar");
    this.item.startDate = "";
  }

  //using camera
  takePicture(event, fab: FabContainer){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {

      console.log('------- ************ -----------');
      console.log(imageData);
      //this.base64Image = this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
      this.base64Image = normalizeURL(imageData);

      console.log('**************');
      console.log(this.base64Image);

      this.photos.push(this.base64Image);
      this.photos.reverse();
      //fab.close();
    }, (err) => {
      //fab.close();
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
