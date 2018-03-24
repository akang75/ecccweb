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
var globalvarible_1 = require("../../Shared/globalvarible");
var globalvarible_2 = require("../../Shared/globalvarible");
var language_service_1 = require("../../Services/language.service");
require("rxjs/add/operator/map");
var webpartbase_1 = require("../../Shared/webpartbase");
var LatestInfoComponent = /** @class */ (function (_super) {
    __extends(LatestInfoComponent, _super);
    function LatestInfoComponent(languageService) {
        return _super.call(this, languageService) || this;
    }
    LatestInfoComponent.prototype.ngOnInit = function () {
        this.titles.set(globalvarible_2.Language.English, "Latest Sunday Message");
        this.titles.set(globalvarible_2.Language.SimplifyChinese, "最新主日信息");
        this.titles.set(globalvarible_2.Language.TranditionalChinese, "最新主日信息");
        this.morningfile = "#";
        this.afternoonfile = "#";
        this.date = "03/018/2018";
        this.informations = new Map();
        this.informations.set(globalvarible_2.Language.English, [{ filepath: this.morningfile,
                title: "The King’s Calling -To be the disciple of the Lord - Brother Jonathan Pon",
                length: "1:0:20" },
            { filepath: this.afternoonfile,
                title: "Heroes of Faith - Mike Wong",
                length: "0:44:15" }]);
        this.informations.set(globalvarible_2.Language.SimplifyChinese, [{ filepath: this.morningfile, title: "主的呼召-作主的门徒 (1) - 彭动平弟兄", length: "1:0:20" }]);
        this.informations.set(globalvarible_2.Language.TranditionalChinese, [{ filepath: this.morningfile, title: "主的呼召-作主的門徒 (1) - 彭動平弟兄", length: "1:0:20" }]);
        this.LoadData();
    };
    LatestInfoComponent.prototype.LoadData = function () {
        this.title = this.titles.get(globalvarible_1.GlobalVariable.language);
        this.currentinformation = this.informations.get(globalvarible_1.GlobalVariable.language);
        console.log(this.currentinformation[0]);
    };
    LatestInfoComponent = __decorate([
        core_1.Component({
            selector: 'latestinfo',
            template: "\n            <div id=\"ContentBoxGray\">\n                <h3>{{title}} ({{date}})</h3>\n                <div id=\"BoxContent\">\n                 <div *ngFor=\"let info of currentinformation\">\n                    <p>{{info.title}}</p>\n                    <p><a href=\"{{info.filepath}}\">\n                    <img alt=\"watch online\" src=\"/images/icon/video.png\" style=\"border:0\" width=\"16\" height=\"16\"/> Video({{info.length}})</a>\n                </div>\n\t\t\t</div>\n    "
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], LatestInfoComponent);
    return LatestInfoComponent;
}(webpartbase_1.WebPartBase));
exports.LatestInfoComponent = LatestInfoComponent;
var VideoOfWorship = /** @class */ (function () {
    function VideoOfWorship() {
    }
    return VideoOfWorship;
}());
//# sourceMappingURL=latestinfo.component.js.map