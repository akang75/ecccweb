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
var GospelComponent = /** @class */ (function (_super) {
    __extends(GospelComponent, _super);
    function GospelComponent(languageService) {
        return _super.call(this, languageService) || this;
    }
    GospelComponent.prototype.ngOnInit = function () {
        this.messagetitles = new Map();
        this.messagetitles.set(globalvarible_1.Language.English, "The Latest Gospel Message");
        this.messagetitles.set(globalvarible_1.Language.SimplifyChinese, "最新福音信息(2/24/18)");
        this.messagetitles.set(globalvarible_1.Language.TranditionalChinese, "最新福音信息(2/24/18)");
        this.historytitles = new Map();
        this.historytitles.set(globalvarible_1.Language.English, "Archived Messages");
        this.historytitles.set(globalvarible_1.Language.SimplifyChinese, "其它福音信息");
        this.historytitles.set(globalvarible_1.Language.TranditionalChinese, "其它福音信息");
        this.informations = new Map();
        this.informations.set(globalvarible_1.Language.English, { videofilepath: "Videos/English_Worship/18/" + globalvarible_1.GlobalVariable.englishgospelfilename + ".mp4",
            auidofilepath: "Videos/English_Worship/18/" + globalvarible_1.GlobalVariable.englishgospelfilename + ".mp3",
            title: globalvarible_1.GlobalVariable.gospeltitleen,
            length: "1:0:20",
            speaker: globalvarible_1.GlobalVariable.gospelspeakeren });
        this.informations.set(globalvarible_1.Language.SimplifyChinese, { videofilepath: "Videos/English_Worship/18/" + globalvarible_1.GlobalVariable.gospelfilename + ".mp4",
            auidofilepath: "Videos/English_Worship/18/" + globalvarible_1.GlobalVariable.gospelfilename + ".mp3",
            title: globalvarible_1.GlobalVariable.gospeltitlesi,
            length: "1:0:20",
            speaker: globalvarible_1.GlobalVariable.speakersi });
        this.informations.set(globalvarible_1.Language.TranditionalChinese, { videofilepath: "Videos/English_Worship/18/" + globalvarible_1.GlobalVariable.gospelfilename + ".mp4",
            auidofilepath: "Videos/English_Worship/18/" + globalvarible_1.GlobalVariable.gospelfilename + ".mp3",
            title: globalvarible_1.GlobalVariable.gospelspeakertr,
            length: "1:0:20",
            speaker: globalvarible_1.GlobalVariable.speakertr });
        this.gospelpictures = [{ imagepath: "/images/Event/080712_Street_fair_TN.jpg", date: "2008/07/12", onedrivepath: "http://sdrv.ms/QglqqE" },
            { imagepath: "/images/Event/100710_Street_fair_TN.jpg", date: "2010/07/10", onedrivepath: "http://sdrv.ms/QglmqE" },
            { imagepath: "/images/Event/1107090_Street_fair_TN.jpg", date: "2011/07/09", onedrivepath: "http://sdrv.ms/QglkPz" },
            { imagepath: "/images/Event/120714_street_fair_TN.jpg", date: "2012/07/14", onedrivepath: "http://sdrv.ms/QgliY2" }
        ];
        this.iconfilename = "expand.png";
        this.LoadData();
    };
    GospelComponent.prototype.LoadData = function () {
        this.currentmessagetitle = this.messagetitles.get(globalvarible_1.GlobalVariable.language);
        this.currenthistorytitle = this.historytitles.get(globalvarible_1.GlobalVariable.language);
        this.currentinformation = this.informations.get(globalvarible_1.GlobalVariable.language);
    };
    GospelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gospel',
            templateUrl: "gospel.component.html",
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], GospelComponent);
    return GospelComponent;
}(webpartbase_1.WebPartBase));
exports.GospelComponent = GospelComponent;
//# sourceMappingURL=gospel.component.js.map