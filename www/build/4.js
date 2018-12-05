webpackJsonp([4],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification__ = __webpack_require__(640);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificationPageModule = (function () {
    function VerificationPageModule() {
    }
    VerificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verification__["a" /* VerificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verification__["a" /* VerificationPage */]),
            ],
        })
    ], VerificationPageModule);
    return VerificationPageModule;
}());

//# sourceMappingURL=verification.module.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerificationPage = (function () {
    function VerificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VerificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerificationPage');
    };
    VerificationPage.prototype.resend = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    VerificationPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/verification/verification.html"*/'<ion-content class="loginBg">\n    <ion-card>\n        <ion-card-header>\n            Verification\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list no-line>\n                <!-- <ion-item>\n                    <ion-label>\n                        <ion-icon>\n                            <i class="material-icons">person</i>\n                        </ion-icon>\n                    </ion-label>\n                    <ion-input type="text" placeholder="enter your phone number"></ion-input>\n                </ion-item> -->\n                <ion-item>\n                    <ion-label>\n                        <ion-icon>\n                            <i class="material-icons">vpn_key</i>\n                        </ion-icon>\n                    </ion-label>\n                    <ion-input type="password" placeholder="enter 6 digit code"></ion-input>\n                </ion-item>\n            </ion-list>\n            <a (click)="resend()">Resend Verification Code</a>\n        </ion-card-content>\n        <button ion-button round id="loginBtn" (click)="gotoHome()">\n            <ion-icon>\n                <i class="material-icons md-30">arrow_forward</i>\n            </ion-icon>\n        </button>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/verification/verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ })

});
//# sourceMappingURL=4.js.map