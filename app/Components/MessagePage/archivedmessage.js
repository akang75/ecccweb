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
var ArchivedMessageComponent = /** @class */ (function (_super) {
    __extends(ArchivedMessageComponent, _super);
    function ArchivedMessageComponent(languageService, jsonLoadService) {
        var _this = _super.call(this, languageService) || this;
        _this.jsonLoadService = jsonLoadService;
        return _this;
    }
    ArchivedMessageComponent.prototype.ngOnInit = function () {
        var start = 2005;
        var end = 2018;
        this.years = new Array(end - start + 1);
        this.currentyear = end.toString();
        var i;
        for (i = start; i <= end; i++) {
            this.years[end - i] = i.toString();
        }
        this.LoadData();
    };
    ArchivedMessageComponent.prototype.LoadData = function () {
        this.LoadDataByYear(this.currentyear);
    };
    ArchivedMessageComponent.prototype.LoadDataByYear = function (year) {
        var _this = this;
        this.currentyear = year;
        var filesuffix = "_tr";
        if (globalvarible_1.GlobalVariable.language == globalvarible_1.Language.SimplifyChinese) {
            filesuffix = "_si";
        }
        else if (globalvarible_1.GlobalVariable.language == globalvarible_1.Language.English) {
            filesuffix = "_en";
        }
        var fileName = "../../files/worships/" + year + "/" + year + filesuffix + ".json";
        console.log(fileName);
        this.jsonLoadService.getMessageItems(fileName).subscribe(function (response) {
            _this.messagedata = response;
            console.log(_this.messagedata);
        });
    };
    ArchivedMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oldmessage',
            template: " \n                <table class=\"table table-hover table-striped\">\n                    <tbody>\n                        <tr>\n                            <td colspan=\"6\">\n                                <div class=\"search_categories\">\n                                    <div class=\"select\">\n                                        <select name=\"search_categories\" id=\"search_categories\" (change)=\"LoadDataByYear($event.target.value)\">\n                                            <option *ngFor=\"let year of years\" [value]=\"year\" >{{year}}</option>\n                                        </select>\n                                    </div>\n                                 </div>\n                            </td>\n                        </tr>\n                        <tr *ngFor=\"let message of messagedata\">\n                            <td>{{message.date}}</td>\n                            <td>{{message.title}}</td>\n                            <td>{{message.speaker}}</td>\n                            <td><a href=\"{{message.mp4file}}\"><img alt=\"watch online\" src=\"images/play.png\" class=\"fontsizebutton\"/></a></td>\n                            <td><a href=\"{{message.mp3file}}\"><img alt=\"listen online\" src=\"images/playaudio.png\" class=\"fontsizebutton\"/></a></td>\n                            <td></td>\n                        </tr>\n                    </tbody>\n                </table>"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService, jsonload_service_1.JsonLoadService])
    ], ArchivedMessageComponent);
    return ArchivedMessageComponent;
}(webpartbase_1.WebPartBase));
exports.ArchivedMessageComponent = ArchivedMessageComponent;
var MessageItem = /** @class */ (function () {
    function MessageItem() {
    }
    return MessageItem;
}());
exports.MessageItem = MessageItem;
//# sourceMappingURL=archivedmessage.js.map