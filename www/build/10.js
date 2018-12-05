webpackJsonp([10],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__ = __webpack_require__(280);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, shopping, actionSheetCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopping = shopping;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toast = toast;
        this.lastKeypress = 0;
        this.shoppingList$ = this.shopping
            .getFiltersList('') // we can use getActiveItems() will return only actived Items
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        // this.shoppingList$.subscribe(x => console.log(x));
    }
    HomePage.prototype.ionViewWillLoad = function () {
        console.log('title: ' + this.navParams.get('title'));
        var title = this.navParams.get('title');
        if (title) {
            this.shoppingList$ = this.shopping
                .getSelectedLabelItems(title)
                .snapshotChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            }));
        }
    };
    //filter items
    HomePage.prototype.searchItems = function (event) {
        var val = event.target.value;
        // console.log(val.toLowerCase());
        // console.log(event.timeStamp);
        if (event.timeStamp - this.lastKeypress > 500) {
            this.shoppingList$ = this.shopping.getFiltersList(val).snapshotChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            }));
        }
        this.lastKeypress = event.timeStamp;
    };
    //to show the active items when user tries to search items form DB.
    HomePage.prototype.showActive = function (item) {
        // console.log(item);
        if (item.status === 'active') {
            return false;
        }
        return true;
    };
    //more options
    HomePage.prototype.moreOptions = function (item) {
        var _this = this;
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n      <ion-icon ios="ios-menu" md="md-menu" name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Shopping List - 2\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button navPush="AddShoppingItemPage">\n        <ion-icon id="addItemBtn" ios="ios-add-circle-outline" md="md-add-circle" name="add-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar placeholder="Search Notes" showCancelButton color="danger" (ionInput)="searchItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <!-- if no items in the DB-->\n      <ion-item *ngIf="(shoppingList$ | async)?.length == 0">\n        You don\'t have any notes\n      </ion-item>\n      <!-- If items are in the DB-->\n      <!-- to dislay latest items as 1st item use .reverse() -->\n      <ion-col col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 *ngFor="let item of (shoppingList$ | async)?.reverse()" [hidden]="showActive(item)"> <!-- [hidden] will display only actived items -->\n        <ion-card>\n          <ion-card-header class="header-border">\n            <ion-card-title style="padding: 0px; margin: 0px">\n              <ion-row no-padding>\n                <ion-col col-8 text-left class="homeItemTitle">\n                  {{item.title}}\n                </ion-col>\n                <ion-col text-right>\n                  <!-- <ion-icon ios="ios-more" md="md-more" (click)="moreOptions(item)" style="transform: rotate(90deg)"></ion-icon> -->\n                  <i class="material-icons" (click)="moreOptions(item)">more_vert</i>\n                </ion-col>\n              </ion-row>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content navPush="EditItemPage" [navParams]="{item: item}">\n            <!-- <ion-list> -->\n            <ion-label *ngFor="let litems of item.listedItems; let i=index" style="margin-top: 0px">\n              <!-- <h3  *ngIf="i < 5">  -->\n              <!-- <ion-icon name="radio-button-off"></ion-icon> -->\n              {{litems.title}}\n              <!-- </h3>  -->\n            </ion-label>\n            <!-- </ion-list> -->\n          </ion-card-content>\n          <ion-row no-padding>\n            <ion-col style="padding-bottom: 5px">\n              <ion-badge *ngIf="item.label !== \'\'">\n                <!-- {{item.label.title}} -->\n                {{item.label}}\n              </ion-badge>\n            </ion-col>\n            <ion-col>\n              <ion-buttons end *ngIf="item.startDate !== \'\'">\n                <button button>\n                  <ion-icon ios="ios-calendar-outline" md="md-calendar"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Length: {{(shoppingList$ | async)?.length}} -->\n  <!-- Reverse: {{(shoppingList$ | async)?.reverse()}} -->\n</ion-content>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__["a" /* ToastService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=10.js.map