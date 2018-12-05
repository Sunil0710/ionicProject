webpackJsonp([11],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivePageModule", function() { return ArchivePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__archive__ = __webpack_require__(630);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArchivePageModule = (function () {
    function ArchivePageModule() {
    }
    ArchivePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__archive__["a" /* ArchivePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__archive__["a" /* ArchivePage */]),
            ],
        })
    ], ArchivePageModule);
    return ArchivePageModule;
}());

//# sourceMappingURL=archive.module.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivePage; });
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





// import * as _ from 'lodash';
var ArchivePage = (function () {
    function ArchivePage(navCtrl, shopping, toast, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.toast = toast;
        this.actionSheetCtrl = actionSheetCtrl;
        this.shoppingList$ = this.shopping
            .getArchiveItems()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    //more options
    ArchivePage.prototype.moreOptions = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Trash',
                    role: 'destructive',
                    handler: function () {
                        console.log('trashed item: ' + item.title);
                        item.status = "trash";
                        _this.shopping.editItem(item).then(function () {
                            console.log(item.status);
                            _this.toast.show(item.title + " trashed !");
                            //this.navCtrl.setRoot('ArchivePage');
                        });
                        // this.shopping.removeItem(item).then(() => {
                        //   this.toast.show(`${item.title} deleted !`);
                        //   this.navCtrl.setRoot('HomePage');
                        // });
                    }
                },
                {
                    text: 'Un-Archive',
                    handler: function () {
                        item.status = "active";
                        _this.shopping.editItem(item).then(function () {
                            console.log(item.status);
                            _this.toast.show(item.title + " un-archived !");
                            //this.navCtrl.setRoot('ArchivePage');
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
    ArchivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-archive',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/archive/archive.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon ios="ios-menu" md="md-menu" name="menu"></ion-icon>\n    </button>\n    <ion-title>Recently Archived</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <!-- if no items in the DB-->\n      <ion-item *ngIf="(shoppingList$ | async)?.length == 0">\n        You don\'t have any Archived Items\n      </ion-item>\n      <!-- If items are in the DB-->\n      <!-- to dislay latest items as 1st item use .reverse() -->\n      <ion-col col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 *ngFor="let item of (shoppingList$ | async)?.reverse()">\n        <ion-card>\n          <ion-card-header class="header-border">\n            <ion-card-title style="padding: 0px; margin: 0px">\n              <ion-row no-padding>\n                <ion-col col-8 text-left class="homeItemTitle" navPush="ArchiveDetailsPage" [navParams]="{item: item}">\n                  {{item.title}}\n                </ion-col>\n                <ion-col text-right style="margin-right: 5%">\n                  <!-- <ion-icon ios="ios-more" md="md-more" (click)="moreOptions(item)" style="transform: rotate(90deg)"></ion-icon> -->\n                  <i class="material-icons" (click)="moreOptions(item)">more_vert</i>\n                </ion-col>\n              </ion-row>\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/archive/archive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ArchivePage);
    return ArchivePage;
}());

//# sourceMappingURL=archive.js.map

/***/ })

});
//# sourceMappingURL=11.js.map