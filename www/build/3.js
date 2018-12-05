webpackJsonp([3],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShoppingItemPageModule", function() { return AddShoppingItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_item__ = __webpack_require__(628);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_shopping_item__["a" /* AddShoppingItemPage */]),
            ],
        })
    ], AddShoppingItemPageModule);
    return AddShoppingItemPageModule;
}());

//# sourceMappingURL=add-shopping-item.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bounce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(152);

var bounce = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('bounce', [
    // state('void', style({ opacity: 0 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-10px)', offset: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0)', offset: 1 })
        ]))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0)', offset: 0 })
        ]))
    ]),
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popover_popover__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_animations__ = __webpack_require__(625);
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
    function AddShoppingItemPage(navCtrl, navParams, camera, shopping, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.shopping = shopping;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.item = {
            title: '',
            label: '',
            status: '',
            startDate: '',
            listedItems: [],
            strikedItems: [],
        };
        this.photos = [];
        this.item.status = "active";
        //this.item.startDate = new Date().toISOString();
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
        this.item.listedItems = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* reorderArray */])(this.item.listedItems, indexes);
    };
    // add labels to item
    AddShoppingItemPage.prototype.presentPopover = function (myEvent, fab) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (popoverData) {
            console.log(popoverData);
            // this.item.label = popoverData;
            _this.item.label = popoverData.value;
            //fab.close();
        });
    };
    //add to Calendar
    AddShoppingItemPage.prototype.addToCalendar = function (event, fab) {
        var _this = this;
        console.log('add calendar event');
        var modal = this.modalCtrl.create('DateModalPage');
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data.startTime);
                _this.item.startDate = data.startTime;
                //fab.close();
            }
            else {
                _this.item.startDate = '';
            }
            console.log(new Date(data.startTime));
        });
    };
    //remove calendar Date
    AddShoppingItemPage.prototype.removeFromCal = function () {
        console.log("remove item from calendar");
        this.item.startDate = "";
    };
    //using camera
    AddShoppingItemPage.prototype.takePicture = function (event, fab) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log('------- ************ -----------');
            console.log(imageData);
            //this.base64Image = this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
            _this.base64Image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* normalizeURL */])(imageData);
            console.log('**************');
            console.log(_this.base64Image);
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            //fab.close();
        }, function (err) {
            //fab.close();
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
            selector: 'page-add-shopping-item',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/add-shopping-item/add-shopping-item.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <!-- <ion-title>Add Item</ion-title> -->\n    <ion-buttons end>\n        <button ion-button icon-only style="padding: 5px" (click)="presentPopover($event, fab)">\n            <ion-icon>\n                <i class="material-icons">label</i>\n            </ion-icon>\n        </button>\n\n        <button ion-button icon-only style="padding: 5px" \n                (click)="addToCalendar($event, fab)"\n                *ngIf="item.startDate === \'\'">\n            <ion-icon>\n                <i class="material-icons">event</i>\n            </ion-icon>\n        </button>\n\n        <button ion-button icon-only style="padding: 5px" (click)="takePicture($event, fab)">\n            <ion-icon>\n                <i class="material-icons">camera_alt</i>\n            </ion-icon>\n        </button>\n        \n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <div *ngIf="fabList.classList.contains(\'fab-list-active\')" class="backdrop"></div> -->\n\n<ion-content>\n\n  <!-- Dropdown list iocns -->\n  <!-- <ion-fab top right edge #fab>\n      <button ion-fab mini><ion-icon name="arrow-down"></ion-icon></button>\n      <ion-fab-list #fabList>\n          <button ion-fab (click)="presentPopover($event, fab)">\n            <ion-icon  color="primary">\n              <i class="material-icons">label</i>\n            </ion-icon>\n          </button>\n          <button ion-fab (click)="addToCalendar($event, fab)">\n            <ion-icon name="md-calendar" color="primary"></ion-icon>\n          </button>\n          <button ion-fab (click)="takePicture($event, fab)">\n              <ion-icon name="ios-camera" color="primary"></ion-icon>\n          </button>\n      </ion-fab-list>\n  </ion-fab> -->\n\n  <!-- Note title -->\n  <!-- <ion-item>\n    <ion-input [(ngModel)]="item.title" placeholder="enter title"></ion-input>\n  </ion-item> -->\n\n  <ion-list id="calendarItem">\n    <ion-item>\n          <ion-input [(ngModel)]="item.title" placeholder="enter title"></ion-input>\n    </ion-item>\n    <ion-item-sliding>\n        <ion-item *ngIf="item.startDate !== \'\'">\n          {{item?.startDate | date: \'MMM dd, yyyy\'}}\n          <ion-icon item-end color="primary" (click)="addToCalendar($event, fab)">\n            <i class="material-icons"> event </i>\n          </ion-icon>\n        </ion-item>\n        \n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="removeFromCal()">Remove</button>\n        </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <!-- Listed Items -->\n  <ion-list no-lines id="listItems">\n    <ion-list-header>\n      <ion-icon ios="ios-add-circle-outline" md="md-add-circle"  name="add-circle-outline" color="primary" item-start></ion-icon>\n      <ion-input type="text" placeholder="add item name" #newItem (keyup.enter)="addItem(newItem.value);  newItem.value=\'\'"></ion-input>\n    </ion-list-header>\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItem($event)">\n      <ion-item-sliding *ngFor="let item of item.listedItems" [@bounce]>\n        <ion-item>\n          <ion-label class="item-title">{{item.title}}</ion-label>\n          <ion-checkbox class="item-cbox" checked={{item.checkItem}} (ionChange)="updateListedItems(item)"></ion-checkbox>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteListedItem(item)">Delete</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <!-- Striked Items -->\n  <ion-list no-lines id="strikedItems">\n    <ion-item-sliding class="strikedItemsStyle" *ngFor="let item of item.strikedItems" [@bounce]>\n      <ion-item>\n        <ion-label class="item-title-checked" color="lightdark">{{item.title}}</ion-label>\n        <ion-checkbox class="item-cbox" checked={{item.checkItem}} (ionChange)="updateStrikedItems(item)"></ion-checkbox>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteStrikedItem(item)">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <!-- {{item | json}} -->\n\n  <ion-grid>\n    <ion-row>\n        <ion-col col-6 *ngFor="let photo of photos; let id = index">\n            <ion-card class="block">\n                <ion-icon name="ios-close-circle" class="deleteIcon" color="primary" (click)="deletePhoto(id)"></ion-icon>\n                <img src="{{photo}}" alt="photo" />\n            </ion-card>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-badge id="Itemlabel" *ngIf="item.label !== \'\'" [ngClass]="item.label">\n      {{item?.label}}\n  </ion-badge>\n  <button ion-button round id="addBtn" (click)= "submitItem(item)">\n    Add\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/add-shopping-item/add-shopping-item.html"*/,
            animations: [
                __WEBPACK_IMPORTED_MODULE_5__app_animations__["a" /* bounce */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AddShoppingItemPage);
    return AddShoppingItemPage;
}());

//# sourceMappingURL=add-shopping-item.js.map

/***/ })

});
//# sourceMappingURL=3.js.map