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
var LanguageNavComponent = /** @class */ (function () {
    function LanguageNavComponent(languageService) {
        this.languageService = languageService;
        this.languages = [{ language: globalvarible_1.Language.English,
                hidden: false,
                displaytext: "English" },
            { language: globalvarible_1.Language.SimplifyChinese,
                hidden: false,
                displaytext: "简体中文" },
            { language: globalvarible_1.Language.TranditionalChinese,
                hidden: true,
                displaytext: "繁體中文" }];
        globalvarible_2.GlobalVariable.language = globalvarible_1.Language.TranditionalChinese;
    }
    LanguageNavComponent.prototype.setLanguage = function (language) {
        globalvarible_2.GlobalVariable.language = language;
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var lan = _a[_i];
            lan.hidden = false;
            if (globalvarible_1.Language[lan.language] === globalvarible_1.Language[language]) {
                lan.hidden = true;
                this.languageService.changeLanguage(globalvarible_1.Language[language]);
            }
        }
    };
    LanguageNavComponent = __decorate([
        core_1.Component({
            selector: 'langaguenav',
            template: "<link href=\"../style/maincss.css\" rel=\"stylesheet\">\n        <div id=\"languagetable\">\n            <ul id=\"horizontal-language-list\">\n                <li *ngFor=\"let lang of languages\" (click)=\"setLanguage(lang.language)\">\n                    <a [hidden]=lang.hidden>{{lang.displaytext}}</a>\n                </li>\n            </ul>\n        </div>"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], LanguageNavComponent);
    return LanguageNavComponent;
}());
exports.LanguageNavComponent = LanguageNavComponent;
var LanguageTab = /** @class */ (function () {
    function LanguageTab() {
    }
    return LanguageTab;
}());
//# sourceMappingURL=languagenav.component.js.map