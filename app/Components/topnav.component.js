"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var globalvarible_1 = require("../Shared/globalvarible");
var globalvarible_2 = require("../Shared/globalvarible");
var language_service_1 = require("../Services/language.service");
var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(languageService) {
        var _this = this;
        this.languageService = languageService;
        globalvarible_1.GlobalVariable.language;
        this.menuitems = new Map();
        this.menuitems.set(globalvarible_2.Language.English, { items: [{ title: 'Home', routerLink: 'Home' },
                { title: 'About Us', routerLink: 'Welcome' },
                { title: 'Worship', routerLink: 'Default' }] });
        this.menuitems.set(globalvarible_2.Language.SimplifyChinese, { items: [{ title: '主页', routerLink: 'Home' },
                { title: '简介', routerLink: 'Welcome' },
                { title: '崇拜', routerLink: 'Default' }] });
        this.menuitems.set(globalvarible_2.Language.TranditionalChinese, { items: [{ title: '主頁', routerLink: 'Home' },
                { title: '簡介', routerLink: 'Welcome' },
                { title: '崇拜', routerLink: 'Default' }] });
        this.SetCurrentItemByLanguage(globalvarible_2.Language[globalvarible_1.GlobalVariable.language]);
        this.subscription = languageService.currentLanguage$.subscribe(function (language) {
            _this.SetCurrentItemByLanguage(language);
        });
    }
    TopNavComponent.prototype.SetCurrentItemByLanguage = function (language) {
        this.currentItems = this.menuitems.get(globalvarible_2.Language[language]);
    };
    TopNavComponent = __decorate([
        core_1.Component({
            selector: 'topmenu',
            template: "<link href=\"../style/maincss.css\" rel=\"stylesheet\">\n           <ul id=\"horizontal-list\">\n                <nav>\n                    <li *ngFor=\"let item of currentItems.items\">\n                       <a routerLinkActive=\"active\" routerLink=\"{{item.routerLink}}\">{{item.title}}</a>\n                    </li>\n                </nav>\n            </ul>\n      \n    <router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], TopNavComponent);
    return TopNavComponent;
}());
exports.TopNavComponent = TopNavComponent;
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    return MenuItems;
}());
var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    return MenuItem;
}());
//# sourceMappingURL=topnav.component.js.map