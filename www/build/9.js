webpackJsonp([9],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsPageModule", function() { return LabelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labels__ = __webpack_require__(635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LabelsPageModule = (function () {
    function LabelsPageModule() {
    }
    LabelsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__labels__["a" /* LabelsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__labels__["a" /* LabelsPage */]),
            ],
        })
    ], LabelsPageModule);
    return LabelsPageModule;
}());

//# sourceMappingURL=labels.module.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(29);
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




var LabelsPage = (function () {
    function LabelsPage(navCtrl, navParams, viewCtrl, shopping, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.shopping = shopping;
        this.alertCtrl = alertCtrl;
        this.sectionLabels = this.shopping
            .getLabelsList() // we can use getActiveItems() will return only actived Items
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    LabelsPage.prototype.ionViewWillLoad = function () {
        console.log('ionViewWillLoad');
    };
    LabelsPage.prototype.editLabel = function (newLabel) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Lable',
            message: "Modify your existing label name",
            inputs: [
                {
                    name: 'title',
                    value: newLabel.value
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.label = {
                            key: newLabel.key,
                            title: _this.capitalizeFirstLetter(data.title),
                            value: data.title
                        };
                        _this.shopping.editLabel(_this.label).then(function () {
                            console.log('Before edit Label: ' + newLabel.value);
                            console.log('After edit Label: ' + _this.label.value);
                            var labelsData = _this.shopping.getSelectedLabelItems(newLabel.value).snapshotChanges()
                                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
                                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
                            }));
                            labelsData.subscribe(function (data) {
                                data.forEach(function (info) {
                                    info.label = _this.label.value;
                                    _this.shopping.editItem(info);
                                });
                            });
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    LabelsPage.prototype.capitalizeFirstLetter = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    ;
    LabelsPage.prototype.deleteLabel = function (data) {
        this.shopping.removeLabel(data);
    };
    ;
    LabelsPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LabelsPage.prototype.saveLabels = function () {
        this.viewCtrl.dismiss();
    };
    LabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-labels',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/labels/labels.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <!-- <button ion-button menuToggle>\n      <ion-icon ios="ios-menu" md="md-menu" name="menu"></ion-icon>\n    </button> -->\n\n    <ion-title>Labels</ion-title>\n\n    <ion-buttons start>\n        <button ion-button icon-only (click)="dismissModal()">\n            Cancel\n        </button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="saveLabels()">\n            Done\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let p of (sectionLabels | async)">\n          <ion-item>\n            <ion-label>{{p.title}}</ion-label>\n          </ion-item>\n          <ion-item-options side="right">\n              <button ion-button color="primary" (click)="editLabel(p)">\n                <i class="material-icons">edit</i>\n              </button>\n            <button ion-button color="danger" (click)="deleteLabel(p)">\n              <i class="material-icons">delete</i>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list> \n\n</ion-content>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/labels/labels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LabelsPage);
    return LabelsPage;
}());

//# sourceMappingURL=labels.js.map

/***/ })

});
//# sourceMappingURL=9.js.map