webpackJsonp([0],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(478);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__ = __webpack_require__(279);
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
    function HomePage(navCtrl, shopping, actionSheetCtrl, toast) {
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toast = toast;
        this.shoppingList$ = this.shopping
            .getShoppingList()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        console.log(this.shoppingList$);
    }
    //more options
    HomePage.prototype.moreOptions = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Deleted task: ' + item.title);
                        _this.shopping.removeItem(item).then(function () {
                            _this.toast.show(item.title + " deleted !");
                            _this.navCtrl.setRoot('HomePage');
                        });
                    }
                },
                {
                    text: 'Share',
                    handler: function () {
                        console.log('Shared task: ' + item.title);
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archived task: ' + item.title);
                        console.log('Archived task key: ' + item.key);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/ShoppingList-2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Shopping List - 2\n    </ion-title>\n\n    <ion-buttons end> \n      <button ion-button navPush="AddShoppingItemPage">\n        <ion-icon name="add-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n    <ion-list-header>\n      Items\n    </ion-list-header>\n    <ion-item *ngFor="let item of shoppingList$ | async">\n      {{item.title}}\n    </ion-item>\n  </ion-list> -->\n\n  <ion-grid>\n    <ion-row>\n      <!-- if no items in the DB-->\n\n      <ion-item *ngIf="(shoppingList$ | async)?.length == 0"> \n        Your list is empty \n        <p>Click &nbsp; <ion-icon name="add-circle-outline"></ion-icon> &nbsp; to add new task.</p>\n      </ion-item>\n\n      <!-- If items are in the DB-->\n      <ion-col col-6 *ngFor="let item of shoppingList$ | async">\n        <ion-card>\n          <ion-card-header style="padding: 10px 0px">\n            <ion-card-title style="padding: 0px; margin: 0px">\n              <ion-row no-padding>\n                <ion-col text-left style="margin-left: 2%">\n                    {{item.title}}\n                </ion-col>\n                <ion-col text-right style="margin-right: 5%">\n                    <ion-icon name="ios-more" (click)="moreOptions(item)"></ion-icon>   \n                </ion-col>\n              </ion-row>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-content style="height: 150px;" navPush="EditItemPage" [navParams]="{item: item}">\n              <!-- <ion-list> -->\n                  <ion-label *ngFor="let litems of item.listedItems; let i=index" style="margin-left: 5%; margin-top: 0px">\n                     <h3  *ngIf="i < 6"> \n                        <!-- <ion-icon name="radio-button-off"></ion-icon> -->\n                        {{litems.title}} \n                      </h3> \n                  </ion-label>\n              <!-- </ion-list> -->\n          </ion-content>\n          <ion-row no-padding>\n            <ion-col style="padding-bottom: 5px">\n              <ion-badge  *ngIf="item.label !== \'\'" [ngClass]="item.label">\n                {{item.label}}\n              </ion-badge>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Length: {{(shoppingList$ | async)?.length}} -->\n</ion-content>\n'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/ShoppingList-2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__["a" /* ToastService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map