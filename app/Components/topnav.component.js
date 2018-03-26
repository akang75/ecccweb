"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var language_service_1 = require("../Services/language.service");
var webpartbase_1 = require("../Shared/webpartbase");
var TopNavComponent = /** @class */ (function (_super) {
    __extends(TopNavComponent, _super);
    function TopNavComponent(languageService) {
        return _super.call(this, languageService) || this;
    }
    TopNavComponent.prototype.ngOnInit = function () {
        this.menuitems = new Map();
        this.menuitems.set(globalvarible_1.Language.English, { items: [{ title: 'Home', routerLink: 'Home', icon: "pe-7s-home" },
                { title: 'Meeting', routerLink: 'Meeting', icon: "pe-7s-date" },
                { title: 'Message', routerLink: 'Message', icon: "pe-7s-pin" },
                { title: 'God\'s Word', routerLink: 'GodWord', icon: "pe-7s-film" },
                { title: 'Gospel', routerLink: 'Gospel', icon: "pe-7s-speaker" },
                { title: 'Fellowship', routerLink: 'Fellowship', icon: "pe-7s-users" },
                { title: 'About Us', routerLink: 'About', icon: "pe-7s-info" }] });
        this.menuitems.set(globalvarible_1.Language.SimplifyChinese, { items: [{ title: '主页', routerLink: 'Home', icon: "pe-7s-home" },
                { title: '聚会', routerLink: 'Meeting', icon: "pe-7s-date" },
                { title: '主日信息', routerLink: 'Message', icon: "pe-7s-pin" },
                { title: '主的话', routerLink: 'GodWord', icon: "pe-7s-film" },
                { title: '福音', routerLink: 'Gospel', icon: "pe-7s-speaker" },
                { title: '肢体生活', routerLink: 'Fellowship', icon: "pe-7s-users" },
                { title: '简介', routerLink: 'About', icon: "pe-7s-info" }] });
        this.menuitems.set(globalvarible_1.Language.TranditionalChinese, { items: [{ title: '主頁', routerLink: 'Home', icon: "pe-7s-home" },
                { title: '聚會', routerLink: 'Meeting', icon: "pe-7s-date" },
                { title: '主日信息', routerLink: 'Message', icon: "pe-7s-pin" },
                { title: '主的話', routerLink: 'GodWord', icon: "pe-7s-film" },
                { title: '福音', routerLink: 'Gospel', icon: "pe-7s-speaker" },
                { title: '肢體生活', routerLink: 'Fellowship', icon: "pe-7s-users" },
                { title: '簡介', routerLink: 'About', icon: "pe-7s-info" }] });
        this.LoadData();
    };
    TopNavComponent.prototype.LoadData = function () {
        this.currentItems = this.menuitems.get(globalvarible_1.GlobalVariable.language);
    };
    TopNavComponent = __decorate([
        core_1.Component({
            selector: 'topmenu',
            template: "<div class=\"sidebar-wrapper\">\n            <div class=\"logo\">\n                <a href=\"http://www.eccc.net:81\" class=\"simple-text\">\n                        Welcome to ECCC!\n                </a>\n            </div>\n           <ul class=\"nav responsive-nav\">\n                <li routerLinkActive=\"active\" *ngFor=\"let menuItem of currentItems.items\">\n                    <a  [routerLink]=\"[menuItem.routerLink]\">\n                    <i class=\"{{menuItem.icon}}\"></i>\n                    <p>{{menuItem.title}}</p>\n                    </a>\n                </li>\n            </ul>\n            </div>\n      \n    "
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], TopNavComponent);
    return TopNavComponent;
}(webpartbase_1.WebPartBase));
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