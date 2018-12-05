import { Injectable } from "@angular/core";
import { AngularFireDatabase} from "angularfire2/database";

import { Item } from './../../models/item/item.model';
import { LabelItem } from './../../models/label/label.model';
 
@Injectable()
export class ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shopping-list');
    private shoppingLabelsRef = this.db.list<LabelItem>('labels-list');

    constructor(private db: AngularFireDatabase){ }

    //get all the list items in the DB.
    getShoppingList(){
        return this.shoppingListRef;
    }

    //get filters Items
    getFiltersList(title){
        return this.db.list<Item>('shopping-list', 
            items => title ? items.orderByChild('title').startAt(title).endAt(title +"\uf8ff") : items.orderByChild('status').equalTo('active')
        );
    }

    //add item to the DB.
    addItem(item: Item){
        return this.shoppingListRef.push(item);
    }   
    
    //update the list items in the DB.
    editItem(item: Item){
        return this.shoppingListRef.update(item.key, item);
    }

    //remove the item from DB.
    removeItem(item: Item){
        return this.shoppingListRef.remove(item.key);
    }

    //get Actvie items from the DB.
    getActiveItems(){
        return this.db.list<Item>('shopping-list', items => items.orderByChild('status').equalTo('active'));
    }

    //get Archvie items from the DB.
    getArchiveItems(){
        return this.db.list<Item>('shopping-list', items => items.orderByChild('status').equalTo('archive'));
    }

    //get Trash items from the DB.
    getTrashItems(){
        return this.db.list<Item>('shopping-list', items => items.orderByChild('status').equalTo('trash'));
    }

    //get the labels list from DB
    getLabelsList(){
        return this.shoppingLabelsRef;
    }

    //add labels to DB
    addLabel(label: LabelItem){
        return this.shoppingLabelsRef.push(label);
    }

    //update label in DB
    editLabel(label: LabelItem){
        return this.shoppingLabelsRef.update(label.key, label);
    }

    //remove labels from DB
    removeLabel(label: LabelItem){
        return this.shoppingLabelsRef.remove(label.key);
    }

    //get the selected label items from DB
    getSelectedLabelItems(labelName){
        return this.db.list<Item>('shopping-list', items => items.orderByChild('label').equalTo(labelName));
    }
    // getSelectedLabelItems(labelObj){
    //     return this.db.list<Item>('shopping-list', items => items.orderByChild('label').equalTo(labelObj));  // label = "Home"   label = {}
    // }
}