import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { LabelItem } from '../../models/label/label.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  // labels: any;


  labelsList: Observable<LabelItem[]>;


  constructor(
    public viewCtrl: ViewController,
    private shopping: ShoppingListService
  ) {
    // this.labels = [
    //   { text: 'Home', value: 'home', checked: 'false' },
    //   { text: 'Work', value: 'work', checked: 'false'  },
    //   { text: 'Personal', value: 'personal', checked: 'false'  },
    //   { text: 'Health', value: 'health', checked: 'false'  }
    // ]

    this.labelsList = this.shopping
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

  chageLabel(label){
    this.viewCtrl.dismiss(label);
  }

}
