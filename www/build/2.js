webpackJsonp([2],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShoppingItemPageModule", function() { return AddShoppingItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_item__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddShoppingItemPageModule = (function () {
    function AddShoppingItemPageModule() {
    }
    AddShoppingItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_shopping_item__["a" /* AddShoppingItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_shopping_item__["a" /* AddShoppingItemPage */]),
            ],
        })
    ], AddShoppingItemPageModule);
    return AddShoppingItemPageModule;
}());

//# sourceMappingURL=add-shopping-item.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popover_popover__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddShoppingItemPage = (function () {
    function AddShoppingItemPage(navCtrl, navParams, camera, shopping, toast, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.shopping = shopping;
        this.toast = toast;
        this.popoverCtrl = popoverCtrl;
        this.item = {
            title: '',
            label: '',
            listedItems: [],
            strikedItems: []
        };
    }
    AddShoppingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddShoppingItemPage');
    };
    // adding items to listedItems
    AddShoppingItemPage.prototype.addItem = function (newItem) {
        if (newItem) {
            this.item.listedItems.push({
                title: newItem,
                checkItem: false
            });
        }
    };
    // remove items from listedItems and add them to strikedItems
    AddShoppingItemPage.prototype.updateListedItems = function (newItem) {
        console.log(this.item);
        this.item.strikedItems.push({
            title: newItem.title,
            checkItem: true
        });
        this.item.listedItems.splice(this.item.listedItems.indexOf(newItem), 1);
    };
    //remove items from strikedItems and add them to listedItems
    AddShoppingItemPage.prototype.updateStrikedItems = function (newItem) {
        this.item.listedItems.push({
            title: newItem.title,
            checkItem: false
        });
        this.item.strikedItems.splice(this.item.strikedItems.indexOf(newItem), 1);
    };
    //delete items from listedItems
    AddShoppingItemPage.prototype.deleteListedItem = function (newItem) {
        this.item.listedItems.splice(this.item.listedItems.indexOf(newItem), 1);
    };
    //delete items from strikedItems
    AddShoppingItemPage.prototype.deleteStrikedItem = function (newItem) {
        this.item.strikedItems.splice(this.item.strikedItems.indexOf(newItem), 1);
    };
    //reorder items
    AddShoppingItemPage.prototype.reorderItem = function (indexes) {
        console.log(indexes);
        this.item.listedItems = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* reorderArray */])(this.item.listedItems, indexes);
    };
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
    AddShoppingItemPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (popoverData) {
            console.log(popoverData);
            _this.item.label = popoverData.value;
        });
    };
    //using camera
    AddShoppingItemPage.prototype.takePicture = function (event, fab) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            //this.base64Image = this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
            _this.base64Image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* normalizeURL */])(imageData);
            console.log(_this.base64Image);
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            fab.close();
        }, function (err) {
            fab.close();
            console.log(err);
        });
    };
    //delete photo
    AddShoppingItemPage.prototype.deletePhoto = function (index) {
        this.photos.splice(index, 1);
    };
    //submit item to DB
    AddShoppingItemPage.prototype.submitItem = function (newItem) {
        var _this = this;
        this.shopping.addItem(newItem).then(function (ref) {
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-shopping-item',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/ShoppingList-2/src/pages/add-shopping-item/add-shopping-item.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Item</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<div *ngIf="fabList.classList.contains(\'fab-list-active\')" class="backdrop"></div>\n\n<ion-content>\n\n  <!-- Dropdown list iocns -->\n  <ion-fab top right edge #fab>\n      <button ion-fab mini><ion-icon name="arrow-down"></ion-icon></button>\n      <ion-fab-list #fabList>\n          <button ion-fab (click)="presentPopover($event)">\n            <ion-icon  color="primary">\n              <i class="material-icons">label</i>\n            </ion-icon>\n          </button>\n          <button ion-fab><ion-icon name="md-calendar" color="primary"></ion-icon></button>\n          <button ion-fab (click)="takePicture($event, fab)">\n              <ion-icon name="ios-camera" color="primary"></ion-icon>\n          </button>\n      </ion-fab-list>\n  </ion-fab>\n\n  <!-- Note title -->\n  <ion-item>\n    <ion-input [(ngModel)]="item.title" placeholder="enter title"></ion-input>\n  </ion-item>\n\n  <!-- Listed Items -->\n  <ion-list no-lines id="listItems">\n    <ion-list-header>\n      <ion-icon name="add-circle-outline" color="primary" item-start></ion-icon>\n      <ion-input type="text" placeholder="add item name" #newItem (keyup.enter)="addItem(newItem.value);  newItem.value=\'\'"></ion-input>\n    </ion-list-header>\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItem($event)">\n      <ion-item-sliding *ngFor="let item of item.listedItems">\n        <ion-item>\n          <ion-label class="item-title">{{item.title}}</ion-label>\n          <ion-checkbox class="item-cbox" checked={{item.checkItem}} (ionChange)="updateListedItems(item)"></ion-checkbox>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteListedItem(item)">Delete</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <!-- Striked Items -->\n  <ion-list no-lines id="strikedItems">\n    <ion-item-sliding *ngFor="let item of item.strikedItems">\n      <ion-item>\n        <ion-label class="item-title-checked" color="lightdark">{{item.title}}</ion-label>\n        <ion-checkbox class="item-cbox" color="primarylight" checked={{item.checkItem}} (ionChange)="updateStrikedItems(item)"></ion-checkbox>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteStrikedItem(item)">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <!-- {{item | json}} -->\n\n  <ion-badge id="Itemlabel" *ngIf="item.label !== \'\'" [ngClass]="item.label">\n      {{item?.label}}\n  </ion-badge>\n  <button ion-button round id="saveBtn" (click)= "submitItem(item)">\n    Add\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/ShoppingList-2/src/pages/add-shopping-item/add-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], AddShoppingItemPage);
    return AddShoppingItemPage;
}());

//# sourceMappingURL=add-shopping-item.js.map

/***/ })

});
//# sourceMappingURL=2.js.map