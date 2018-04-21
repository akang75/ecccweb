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
var jsonload_service_1 = require("../../Services/jsonload.service");
var MessageComponent = /** @class */ (function (_super) {
    __extends(MessageComponent, _super);
    //#endregion
    function MessageComponent(languageService, jsonLoadService) {
        var _this = _super.call(this, languageService) || this;
        _this.jsonLoadService = jsonLoadService;
        return _this;
    }
    MessageComponent.prototype.ngOnInit = function () {
        //#region 主日信息
        this.showhistoryfile = false;
        this.iconfilename = "expand.png";
        this.messagetitles = new Map();
        this.messagetitles.set(globalvarible_1.Language.English, "Latest Sunday Message");
        this.messagetitles.set(globalvarible_1.Language.SimplifyChinese, "最新主日信息");
        this.messagetitles.set(globalvarible_1.Language.TranditionalChinese, "最新主日信息");
        this.historytitles = new Map();
        this.historytitles.set(globalvarible_1.Language.English, "Archived Messages");
        this.historytitles.set(globalvarible_1.Language.SimplifyChinese, "其它主日信息");
        this.historytitles.set(globalvarible_1.Language.TranditionalChinese, "其它主日信息");
        this.afternoonmessage = new globalvarible_1.VideoOfWorship("", "", "", "", "", "");
        this.morningmessage = new globalvarible_1.VideoOfWorship("", "", "", "", "", "");
        this.messageFileNames = new Map();
        this.messageFileNames.set(globalvarible_1.Language.English, "../../files/worships/morning/2018_en.json");
        this.messageFileNames.set(globalvarible_1.Language.SimplifyChinese, "../../files/worships/morning/2018_si.json");
        this.messageFileNames.set(globalvarible_1.Language.TranditionalChinese, "../../files/worships/morning/2018_tr.json");
        //#endregion
        this.LoadData();
    };
    MessageComponent.prototype.LoadData = function () {
        this.currentmessagetitle = this.messagetitles.get(globalvarible_1.GlobalVariable.language);
        this.currenthistorytitle = this.historytitles.get(globalvarible_1.GlobalVariable.language);
        this.LoadLatestMessage();
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
    MessageComponent.prototype.LoadLatestMessage = function () {
        var _this = this;
        var messageFile = this.messageFileNames.get(globalvarible_1.GlobalVariable.language);
        if (globalvarible_1.GlobalVariable.language == globalvarible_1.Language.English) {
            var fileName = "../../files/worships/afternoon/2018_en.json";
            this.jsonLoadService.getMessageItems(fileName).subscribe(function (response) {
                _this.afternoonmessagedata = response;
                _this.afternoonmessage = _this.afternoonmessagedata[0];
            });
        }
        this.jsonLoadService.getMessageItems(messageFile).subscribe(function (response) {
            _this.messagedata = response;
            _this.morningmessage = _this.messagedata[0];
        });
    };
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message',
            templateUrl: "message.component.html"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService, jsonload_service_1.JsonLoadService])
    ], MessageComponent);
    return MessageComponent;
}(webpartbase_1.WebPartBase));
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map