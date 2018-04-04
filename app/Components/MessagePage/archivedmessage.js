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
        this.currentyear = "2018";
        this.LoadData();
    };
    ArchivedMessageComponent.prototype.LoadYearList = function () {
        var start = 2005;
        if (this.timeofdate == "afternoon") {
            start = 2017;
        }
        var end = 2018;
        this.years = new Array(end - start + 1);
        var i;
        for (i = start; i <= end; i++) {
            this.years[end - i] = i.toString();
        }
    };
    ArchivedMessageComponent.prototype.SetTimeOfDate = function (timeofdate) {
        this.timeofdate = timeofdate;
        this.LoadData();
    };
    ArchivedMessageComponent.prototype.LoadData = function () {
        if (globalvarible_1.GlobalVariable.language != globalvarible_1.Language.English) {
            this.timeofdate = "morning";
        }
        if (this.timeofdate == "afternoon" && +this.currentyear < 2017) {
            this.currentyear = "2018";
        }
        this.LoadYearList();
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
        var fileName = "../../files/worships/" + this.timeofdate + "/" + year + filesuffix + ".json";
        this.jsonLoadService.getMessageItems(fileName).subscribe(function (response) {
            _this.messagedata = response;
            _this.messagedata.forEach(function (file) {
                file.hasaudio = file.mp3file != "";
                file.hasvideo = file.mp4file != "";
            });
        });
    };
    ArchivedMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'oldmessage',
            templateUrl: "archivedmessage.html"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService, jsonload_service_1.JsonLoadService])
    ], ArchivedMessageComponent);
    return ArchivedMessageComponent;
}(webpartbase_1.WebPartBase));
exports.ArchivedMessageComponent = ArchivedMessageComponent;
//# sourceMappingURL=archivedmessage.js.map