import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController, ModalController } from 'ionic-angular';

import { LabelItem } from '../../models/label/label.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PageInterface {
  title: string;
  pageName: string;
  mdIcon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'HomePage';

  @ViewChild(Nav) nav: Nav;

  sectionOnePages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', mdIcon: 'home' },
    { title: 'Calendar', pageName: 'CalendarPage',  mdIcon: 'today' }
  ];

  sectionTwoPages: PageInterface[] = [
    { title: 'Health', pageName: 'LabelsPage', mdIcon: 'label' },
    { title: 'Work', pageName: 'LabelsPage', mdIcon: 'label' },
    { title: 'Home', pageName: 'LabelsPage', mdIcon: 'label' },
    { title: 'Personal', pageName: 'LabelsPage', mdIcon: 'label' }
  ];

  sectionLabels : Observable<LabelItem[]>;

  sectionThreePages: PageInterface[] = [
    { title: 'Archive', pageName: 'ArchivePage', mdIcon: 'archive' },
    { title: 'Trash', pageName: 'TrashPage', mdIcon: 'delete' }
  ];

  label: LabelItem = {
    title:'',
    value: ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private shopping: ShoppingListService,
    public modalCtrl: ModalController
  ) {
    this.sectionLabels = this.shopping
    .getLabelsList()
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface) {
    let params = {};
    this.nav.setRoot(page.pageName, params);
  }

  openLabelPage(label){
    console.log(label);
    // let params = { label: label};
    let params = {title: label.value};
    this.nav.setRoot('HomePage', params);
  }

  isActive(page: PageInterface) {
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  logout(){
    this.navCtrl.setRoot('LoginPage');
  }

  openPrompt(){
    let prompt = this.alertCtrl.create({
      title: 'New Lable',
      message: "Enter a name for new label",
      inputs:[
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: data=> {
            this.label.title = this.capitalizeFirstLetter(data.title);
            this.label.value = this.decapitalizeFirstLetter(data.title);
            this.shopping.addLabel(this.label);
          }
        }
      ]
    });

    prompt.present();
  }

  capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  decapitalizeFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
  }


  // checkFirstLetter(str){
  //   var firstLetter = str.charAt(0);
  //   if(firstLetter === firstLetter.toUpperCase()){
  //     console.log('upper case true');
  //   }else {
  //     console.log('upper case false');
  //   }
  // }



  editLabels(){
    let modal = this.modalCtrl.create('LabelsPage');

    modal.present();
  }

}
