import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  items: any;


  constructor(public viewCtrl: ViewController) {
    this.items = [
      { text: 'Home', value: 'home', checked: false },
      { text: 'Work', value: 'work', checked: false  },
      { text: 'Personal', value: 'personal', checked: false  },
      { text: 'Health', value: 'health', checked: false  }
    ]
  }

  chageLabel(item){
    this.viewCtrl.dismiss(item);
  }

}
