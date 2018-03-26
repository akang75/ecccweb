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
var webpartbase_1 = require("../../Shared/webpartbase");
var language_service_1 = require("../../Services/language.service");
var globalvarible_1 = require("../../Shared/globalvarible");
var jsonload_service_1 = require("../../Services/jsonload.service");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(languageService, jsonLoadService) {
        var _this = _super.call(this, languageService) || this;
        _this.jsonLoadService = jsonLoadService;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.verseItem = { text: "", from: "", version: "" };
        this.fileNames = new Map();
        this.fileNames.set(globalvarible_1.Language.English, "../../files/Goden_Verse_en.json");
        this.fileNames.set(globalvarible_1.Language.SimplifyChinese, "../../files/Goden_Verse_si.json");
        this.fileNames.set(globalvarible_1.Language.TranditionalChinese, "../../files/Goden_Verse_tr.json");
        this.titles.set(globalvarible_1.Language.English, "Daily Verse");
        this.titles.set(globalvarible_1.Language.SimplifyChinese, "每日金句");
        this.titles.set(globalvarible_1.Language.TranditionalChinese, "每日金句");
        this.LoadData();
    };
    HomeComponent.prototype.LoadData = function () {
        var _this = this;
        var fileName = this.fileNames.get(globalvarible_1.GlobalVariable.language);
        this.title = this.titles.get(globalvarible_1.GlobalVariable.language);
        this.jsonLoadService.getVerseItems(fileName).subscribe(function (response) {
            _this.versedata = response;
            var index = Math.floor(Math.random() * (response.length + 1));
            _this.verseItem = response[index];
            console.log(_this.verseItem);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message',
            templateUrl: "home.component.html",
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService, jsonload_service_1.JsonLoadService])
    ], HomeComponent);
    return HomeComponent;
}(webpartbase_1.WebPartBase));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map