webpackJsonp([5],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashedDetailsPageModule", function() { return TrashedDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trashed_details__ = __webpack_require__(639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrashedDetailsPageModule = (function () {
    function TrashedDetailsPageModule() {
    }
    TrashedDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trashed_details__["a" /* TrashedDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trashed_details__["a" /* TrashedDetailsPage */]),
            ],
        })
    ], TrashedDetailsPageModule);
    return TrashedDetailsPageModule;
}());

//# sourceMappingURL=trashed-details.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrashedDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrashedDetailsPage = (function () {
    function TrashedDetailsPage(navCtrl, navParams, shopping, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopping = shopping;
        this.toast = toast;
    }
    TrashedDetailsPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
        console.log(this.item);
    };
    TrashedDetailsPage.prototype.restoreItem = function (item) {
        var _this = this;
        console.log(item);
        item.status = "active";
        this.shopping.editItem(item).then(function () {
            //console.log(item.status);
            _this.toast.show(item.title + " restored !");
            _this.navCtrl.pop();
        });
    };
    TrashedDetailsPage.prototype.deleteItem = function (item) {
        var _this = this;
        this.shopping.removeItem(item).then(function () {
            _this.toast.show(item.title + " deleted !");
            //this.navCtrl.setRoot('HomePage');
        });
    };
    TrashedDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trashed-details',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/trashed-details/trashed-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Details</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only style="padding: 5px" (click)="restoreItem(item)">\n          <ion-icon>\n            <i class="material-icons">restore_from_trash</i>\n          </ion-icon>\n        </button>\n  \n        <button ion-button icon-only style="padding: 5px" (click)="deleteItem(item)">\n          <ion-icon>\n            <i class="material-icons">delete</i>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list id="calendarItem">\n      <ion-item>\n        {{item.title}}\n      </ion-item>\n      <ion-item *ngIf="item.startDate !== \'\'">\n        {{item?.startDate | date: \'MMM dd, yyyy\'}}\n        <ion-icon item-end color="primary">\n          <i class="material-icons"> event </i>\n        </ion-icon>\n      </ion-item>\n    </ion-list>\n  \n    <!-- Listed Items -->\n    <ion-list id="ArcchiveListItems">\n      <ion-list-header>\n        Listed Items\n      </ion-list-header>\n      <ion-item-group>\n        <ion-item-sliding *ngFor="let item of item.listedItems">\n          <ion-item>\n            <ion-label class="item-title">{{item.title}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-item-group>\n    </ion-list>\n  \n    <!-- Striked Items -->\n    <ion-list id="ArcchiveStrikedItems">\n      <ion-list-header>\n          Striked Items\n      </ion-list-header>\n      <ion-item-group>\n          <ion-item-sliding  *ngFor="let item of item.strikedItems">\n              <ion-item>\n                <ion-label class="item-title-checked" color="lightdark">{{item.title}}</ion-label>\n              </ion-item>\n          </ion-item-sliding>\n      </ion-item-group>\n    </ion-list>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/trashed-details/trashed-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], TrashedDetailsPage);
    return TrashedDetailsPage;
}());

//# sourceMappingURL=trashed-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map