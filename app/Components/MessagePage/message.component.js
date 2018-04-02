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
var webpartbase_1 = require("../../Shared/webpartbase");
var language_service_1 = require("../../Services/language.service");
var MessageComponent = /** @class */ (function (_super) {
    __extends(MessageComponent, _super);
    //#endregion
    function MessageComponent(languageService) {
        var _this = _super.call(this, languageService) || this;
        _this.todaydate = "";
        _this.morningvideofile = "";
        _this.morningaudiofile = "";
        _this.afternoonvideofile = "";
        _this.afternoonaudiofile = "";
        return _this;
    }
    MessageComponent.prototype.ngOnInit = function () {
        //#region 主日信息
        this.afternoonvideofile = "Videos/English_Worship/18/" + globalvarible_1.GlobalVariable.afternoonmessagefilename + ".mp3";
        this.afternoonaudiofile = "/mp3/Worship/18/" + globalvarible_1.GlobalVariable.afternoonmessagefilename + ".mp3";
        this.morningvideofile = "Videos/Chinese_Worship/18/" + globalvarible_1.GlobalVariable.morningmessagefilename + ".mp4";
        this.morningaudiofile = "/mp3/Worship/18/" + globalvarible_1.GlobalVariable.morningmessagefilename + ".mp3";
        this.currentmessagetitle = "";
        this.date = globalvarible_1.GlobalVariable.todaydate;
        this.showhistoryfile = false;
        this.iconfilename = "expand.png";
        this.messagetitles = new Map();
        this.messagetitles.set(globalvarible_1.Language.English, "Latest Sunday Message");
        this.messagetitles.set(globalvarible_1.Language.SimplifyChinese, "最新主日信息");
        this.messagetitles.set(globalvarible_1.Language.TranditionalChinese, "最新主日信息");
        this.informations = new Map();
        this.informations.set(globalvarible_1.Language.English, [{ videofilepath: this.morningvideofile,
                auidofilepath: this.morningaudiofile,
                title: globalvarible_1.GlobalVariable.messagetitleen,
                length: "1:0:20",
                speaker: globalvarible_1.GlobalVariable.speakeren },
            { videofilepath: this.afternoonvideofile,
                auidofilepath: this.afternoonaudiofile,
                title: globalvarible_1.GlobalVariable.afternoonmessagetitle,
                length: "0:44:15",
                speaker: globalvarible_1.GlobalVariable.afternoonspeaker }]);
        this.informations.set(globalvarible_1.Language.SimplifyChinese, [{ videofilepath: this.morningvideofile,
                auidofilepath: this.morningaudiofile,
                title: globalvarible_1.GlobalVariable.messagetitlesi,
                length: "1:0:20",
                speaker: globalvarible_1.GlobalVariable.speakersi }]);
        this.informations.set(globalvarible_1.Language.TranditionalChinese, [{ videofilepath: this.morningvideofile,
                auidofilepath: this.morningaudiofile,
                title: globalvarible_1.GlobalVariable.messagetitletr,
                length: "1:0:20",
                speaker: globalvarible_1.GlobalVariable.speakertr }]);
        this.historytitles = new Map();
        this.historytitles.set(globalvarible_1.Language.English, "Archived Messages");
        this.historytitles.set(globalvarible_1.Language.SimplifyChinese, "其它主日信息");
        this.historytitles.set(globalvarible_1.Language.TranditionalChinese, "其它主日信息");
        //#endregion
        this.LoadData();
    };
    MessageComponent.prototype.LoadData = function () {
        this.currentmessagetitle = this.messagetitles.get(globalvarible_1.GlobalVariable.language);
        this.currentinformation = this.informations.get(globalvarible_1.GlobalVariable.language);
        this.currenthistorytitle = this.historytitles.get(globalvarible_1.GlobalVariable.language);
    };
    MessageComponent.prototype.ToggleHistory = function () {
        this.showhistoryfile = !this.showhistoryfile;
        if (this.showhistoryfile) {
            this.iconfilename = "collapse.png";
        }
        else {
            this.iconfilename = "expand.png";
        }
    };
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message',
            templateUrl: "message.component.html"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], MessageComponent);
    return MessageComponent;
}(webpartbase_1.WebPartBase));
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map