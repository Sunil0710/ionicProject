webpackJsonp([7],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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




var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, alertCtrl, shopping, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.shopping = shopping;
        this.modalCtrl = modalCtrl;
        this.rootPage = 'HomePage';
        this.sectionOnePages = [
            { title: 'Home', pageName: 'HomePage', mdIcon: 'home' },
            { title: 'Calendar', pageName: 'CalendarPage', mdIcon: 'today' }
        ];
        this.sectionTwoPages = [
            { title: 'Health', pageName: 'LabelsPage', mdIcon: 'label' },
            { title: 'Work', pageName: 'LabelsPage', mdIcon: 'label' },
            { title: 'Home', pageName: 'LabelsPage', mdIcon: 'label' },
            { title: 'Personal', pageName: 'LabelsPage', mdIcon: 'label' }
        ];
        this.sectionThreePages = [
            { title: 'Archive', pageName: 'ArchivePage', mdIcon: 'archive' },
            { title: 'Trash', pageName: 'TrashPage', mdIcon: 'delete' }
        ];
        this.label = {
            title: '',
            value: ''
        };
        this.sectionLabels = this.shopping
            .getLabelsList()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        this.nav.setRoot(page.pageName, params);
    };
    MenuPage.prototype.openLabelPage = function (label) {
        console.log(label);
        // let params = { label: label};
        var params = { title: label.value };
        this.nav.setRoot('HomePage', params);
    };
    MenuPage.prototype.isActive = function (page) {
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    MenuPage.prototype.logout = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    MenuPage.prototype.openPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'New Lable',
            message: "Enter a name for new label",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
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
                    text: 'Create',
                    handler: function (data) {
                        _this.label.title = _this.capitalizeFirstLetter(data.title);
                        _this.label.value = _this.decapitalizeFirstLetter(data.title);
                        _this.shopping.addLabel(_this.label);
                    }
                }
            ]
        });
        prompt.present();
    };
    MenuPage.prototype.capitalizeFirstLetter = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    ;
    MenuPage.prototype.decapitalizeFirstLetter = function (str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    };
    // checkFirstLetter(str){
    //   var firstLetter = str.charAt(0);
    //   if(firstLetter === firstLetter.toUpperCase()){
    //     console.log('upper case true');
    //   }else {
    //     console.log('upper case false');
    //   }
    // }
    MenuPage.prototype.editLabels = function () {
        var modal = this.modalCtrl.create('LabelsPage');
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-content>\n    <ion-item id="userCard" class="menuHeader">\n        <ion-avatar item-start>\n          <img src="img/avatar-finn.png">\n        </ion-avatar>\n        <h2>John David</h2>\n        <h3>john.david@gmail.com</h3>\n    </ion-item>\n\n    <ion-list>\n      <button ion-item menuClose *ngFor="let p of sectionOnePages" (click)="openPage(p)">\n        <ion-icon item-start [color]="isActive(p)">\n          <i class="material-icons">{{p.mdIcon}}</i>\n        </ion-icon>\n        <ion-label [color]="isActive(p)">{{p.title}}</ion-label>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n          <ion-label item-start>Labels</ion-label>\n          <ion-note item-end (click)="editLabels()">Edit</ion-note>\n      </ion-list-header>\n      <button ion-item menuClose *ngFor="let p of (sectionLabels | async)" (click)="openLabelPage(p)">\n          <ion-icon item-start>\n            <i class="material-icons">label</i>\n          </ion-icon>\n          <ion-label>{{p.title}}</ion-label>\n      </button>\n      <button ion-item menuClose (click)="openPrompt()">\n          <ion-icon item-start>\n            <i class="material-icons">add</i>\n          </ion-icon>\n          <ion-label>Create New</ion-label>\n      </button>\n    </ion-list>    \n\n    <ion-list>\n      <button ion-item menuClose *ngFor="let p of sectionThreePages" (click)="openPage(p)">\n        <ion-icon item-start [color]="isActive(p)">\n          <i class="material-icons">{{p.mdIcon}}</i>\n        </ion-icon>\n        <ion-label [color]="isActive(p)">{{p.title}}</ion-label>\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n        <button ion-button  block (click)="logout()">Logout</button>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/wealthphasedev2/Desktop/ionicApps/notesApp/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=7.js.map