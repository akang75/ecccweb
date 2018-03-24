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
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(languageService) {
        this.languageService = languageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.languages = [{ language: globalvarible_1.Language.English,
                hidden: false,
                displaytext: "English" },
            { language: globalvarible_1.Language.SimplifyChinese,
                hidden: false,
                displaytext: "简体中文" },
            { language: globalvarible_1.Language.TranditionalChinese,
                hidden: true,
                displaytext: "繁體中文" }];
    };
    NavbarComponent.prototype.setLanguage = function (language) {
        globalvarible_2.GlobalVariable.language = globalvarible_1.Language[language];
        this.languageService.changeLanguage(language);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-cmp',
            templateUrl: 'navbar.component.html'
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
var LanguageTab = /** @class */ (function () {
    function LanguageTab() {
    }
    return LanguageTab;
}());
//# sourceMappingURL=navbar.component.js.map