webpackJsonp([2],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPageModule", function() { return EditItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_item__ = __webpack_require__(633);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditItemPageModule = (function () {
    function EditItemPageModule() {
    }
    EditItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItemPage */]),
            ],
        })
    ], EditItemPageModule);
    return EditItemPageModule;
}());

//# sourceMappingURL=edit-item.module.js.map

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

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popover_popover__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_animations__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_toast_service__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditItemPage = (function () {
    function EditItemPage(navCtrl, navParams, camera, shopping, popoverCtrl, modalCtrl, actionSheetCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.shopping = shopping;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toast = toast;
    }
    EditItemPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
    };
    EditItemPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('item'));
    };
    // adding items to listedItems
    EditItemPage.prototype.addItem = function (newItem) {
        if (newItem) {
            this.item.listedItems.push({
                title: newItem,
                checkItem: false
            });
        }
    };
    // remove items from listedItems and add them to strikedItems
    EditItemPage.prototype.updateListedItems = function (newItem) {
        if (this.item.strikedItems === undefined) {
            this.item.strikedItems = [];
        }
        this.item.strikedItems.push({
            title: newItem.title,
            checkItem: true
        });
        this.item.listedItems.splice(this.item.listedItems.indexOf(newItem), 1);
    };
    //remove items from strikedItems and add them to listedItems
    EditItemPage.prototype.updateStrikedItems = function (newItem) {
        if (this.item.listedItems === undefined) {
            this.item.listedItems = [];
        }
        this.item.listedItems.push({
            title: newItem.title,
            checkItem: false
        });
        this.item.strikedItems.splice(this.item.strikedItems.indexOf(newItem), 1);
    };
    //delete items from listedItems
    EditItemPage.prototype.deleteListedItem = function (newItem) {
        this.item.listedItems.splice(this.item.listedItems.indexOf(newItem), 1);
    };
    //delete items from strikedItems
    EditItemPage.prototype.deleteStrikedItem = function (newItem) {
        this.item.strikedItems.splice(this.item.strikedItems.indexOf(newItem), 1);
    };
    //reorder items
    EditItemPage.prototype.reorderItem = function (indexes) {
        console.log(indexes);
        this.item.listedItems = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* reorderArray */])(this.item.listedItems, indexes);
    };
    EditItemPage.prototype.presentPopover = function (myEvent, fab) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (popoverData) {
            // this.item.label = popoverData;
            _this.item.label = popoverData.value;
            //fab.close();
        });
    };
    //add to Calendar
    EditItemPage.prototype.addToCalendar = function (event, fab) {
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
        });
    };
    //remove calendar Date
    EditItemPage.prototype.removeFromCal = function () {
        console.log("remove item from calendar");
        this.item.startDate = "";
    };
    //more options
    EditItemPage.prototype.moreOptions = function (item) {
        var _this = this;
        console.log(item);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Trash',
                    role: 'destructive',
                    handler: function () {
                        console.log('Deleted task: ' + item.title);
                        item.status = "trash";
                        _this.shopping.editItem(item).then(function () {
                            console.log(item.status);
                            _this.toast.show(item.title + " trashed !");
                            _this.navCtrl.setRoot('HomePage');
                        });
                    }
                },
                {
                    text: 'Share',
                    handler: function () {
                        console.log('Shared task: ' + item.title);
                        _this.toast.show(item.title + " shared !");
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        // console.log('Status : ' +item.status);
                        // console.log('Item Name : ' +item.title);
                        item.status = "archive";
                        _this.shopping.editItem(item).then(function () {
                            console.log(item.status);
                            _this.toast.show(item.title + " archived !");
                            _this.navCtrl.setRoot('HomePage');
                            //this.navCtrl.pop();
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present(); //presenting the action sheet.
    };
    //using camera
    EditItemPage.prototype.takePicture = function (event, fab) {
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
            _this.base64Image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* normalizeURL */])(imageData);
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
            //fab.close();
        }, function (err) {
            //fab.close();
            console.log(err);
        });
    };
    //delete photo
    EditItemPage.prototype.deletePhoto = function (index) {
        this.photos.splice(index, 1);
    };
    //save changes to DB 
    EditItemPage.prototype.saveItem = function (item) {
        var _this = this;
        this.shopping.editItem(item).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-item',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/edit-item/edit-item.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <!-- <ion-title>Edit Note</ion-title> -->\n    <ion-buttons end>\n        <button ion-button icon-only style="padding: 5px" (click)="presentPopover($event, fab)">\n            <ion-icon>\n                <i class="material-icons">label</i>\n            </ion-icon>\n        </button>\n\n        <button ion-button icon-only style="padding: 5px" \n                (click)="addToCalendar($event, fab)"\n                *ngIf="item.startDate === \'\'">\n            <ion-icon>\n                <i class="material-icons">event</i>\n            </ion-icon>\n        </button>\n\n        <button ion-button icon-only style="padding: 5px" (click)="takePicture($event, fab)">\n            <ion-icon>\n                <i class="material-icons">camera_alt</i>\n            </ion-icon>\n        </button>\n\n        <button ion-button icon-only (click)="moreOptions(item)">\n            <i class="material-icons">more_vert</i>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!-- Show Note Title and Calendar Event Date -->\n    <ion-list id="calendarItem">\n      <ion-item>\n          <ion-input [(ngModel)]="item.title" placeholder="enter title"></ion-input>\n      </ion-item>\n      <ion-item-sliding>\n        <ion-item *ngIf="item.startDate !== \'\'">\n          {{item?.startDate | date: \'MMM dd, yyyy\'}}\n          <ion-icon item-end color="primary" (click)="addToCalendar($event, fab)">\n            <i class="material-icons"> event </i>\n          </ion-icon>\n        </ion-item>\n        \n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="removeFromCal()">Remove</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  \n    <!-- Listed Items -->\n    <ion-list no-lines id="listItems">\n      <ion-list-header>\n        <ion-icon ios="ios-add-circle-outline" md="md-add-circle" name="add-circle-outline" color="primary" item-start></ion-icon>\n        <ion-input type="text" placeholder="add item name" #newItem (keyup.enter)="addItem(newItem.value);  newItem.value=\'\'"></ion-input>\n      </ion-list-header>\n      <ion-item-group reorder="true" (ionItemReorder)="reorderItem($event)">\n        <ion-item-sliding *ngFor="let item of item.listedItems" [@bounce]>\n          <ion-item>\n            <ion-label class="item-title">{{item.title}}</ion-label>\n            <ion-checkbox class="item-cbox" checked={{item.checkItem}} (ionChange)="updateListedItems(item)"></ion-checkbox>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="danger" (click)="deleteListedItem(item)">Delete</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-item-group>\n    </ion-list>\n  \n    <!-- Striked Items -->\n    <ion-list no-lines id="strikedItems"> <!-- *ngIf="item.strikedItems.length > 0" -->\n      <ion-item-sliding class="strikedItemsStyle" *ngFor="let item of item.strikedItems" [@bounce]>\n        <ion-item>\n          <ion-label class="item-title-checked" color="lightdark">{{item.title}}</ion-label>\n          <ion-checkbox class="item-cbox" checked={{item.checkItem}} (ionChange)="updateStrikedItems(item)"></ion-checkbox>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteStrikedItem(item)">Delete</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <!-- {{item | json}} -->\n    <ion-badge id="Itemlabel" *ngIf="item.label !== \'\'">\n      <!-- {{item?.label.value}} -->\n      {{item?.label}}\n    </ion-badge>\n    <button ion-button round id="saveBtn" (click)= "saveItem(item)">\n      Save\n    </button>\n  </ion-content>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/edit-item/edit-item.html"*/,
            animations: [
                __WEBPACK_IMPORTED_MODULE_5__app_animations__["a" /* bounce */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_toast_service__["a" /* ToastService */]])
    ], EditItemPage);
    return EditItemPage;
}());

//# sourceMappingURL=edit-item.js.map

/***/ })

});
//# sourceMappingURL=2.js.map