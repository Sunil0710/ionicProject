import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { LabelItem } from '../../models/label/label.model';

import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PageInterface {
  title: string;
  pageName: string;
  mdIcon: string
}

@IonicPage()
@Component({
  selector: 'page-labels',
  templateUrl: 'labels.html',
})
export class LabelsPage {

  sectionLabels: Observable<LabelItem[]>;

  label: LabelItem;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private shopping: ShoppingListService,
    public alertCtrl: AlertController
  ) {

    this.sectionLabels = this.shopping
      .getLabelsList()  // we can use getActiveItems() will return only actived Items
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


  ionViewWillLoad() {
    console.log('ionViewWillLoad');
  }

  editLabel(newLabel) {
    let prompt = this.alertCtrl.create({
      title: 'Edit Lable',
      message: "Modify your existing label name",
      inputs: [
        {
          name: 'title',
          value: newLabel.value
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.label = {
              key: newLabel.key,
              title: this.capitalizeFirstLetter(data.title),
              value: data.title
            }

            this.shopping.editLabel(this.label).then(() => {
                console.log('Before edit Label: ' + newLabel.value);
                console.log('After edit Label: ' + this.label.value);

                var labelsData = this.shopping.getSelectedLabelItems(newLabel.value).snapshotChanges()
                  .pipe(
                    map(changes =>
                      changes.map(c => (
                        {
                          key: c.payload.key, ...c.payload.val()
                        }
                      )))
                  );

                labelsData.subscribe(data => {
                  data.forEach(info => {
                    info.label = this.label.value;
                    this.shopping.editItem(info);
                  });
                });
              });
            }
          }
      ]
    });

    prompt.present();
  };

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  deleteLabel(data) {
    var labelsData = this.shopping.getSelectedLabelItems(data.value).snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c => (
              {
                key: c.payload.key, ...c.payload.val()
              }
            )))
        );

      labelsData.subscribe(data => {
        data.forEach(info => {
          info.label = '';
          this.shopping.editItem(info);
        });
      });
    
    this.shopping.removeLabel(data);
  };


  dismissModal() {
    this.viewCtrl.dismiss();
  }

  saveLabels() {
    this.viewCtrl.dismiss();
  }

}
