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
var router_1 = require("@angular/router");
var jsonload_service_1 = require("../../Services/jsonload.service");
var VideoListComponent = /** @class */ (function (_super) {
    __extends(VideoListComponent, _super);
    function VideoListComponent(languageService, activatedRoute, jsonLoadService) {
        var _this = _super.call(this, languageService) || this;
        _this.activatedRoute = activatedRoute;
        _this.jsonLoadService = jsonLoadService;
        return _this;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.source = params['source'];
        });
        this.titles = new Map();
        switch (this.source) {
            case "basic_truth":
                {
                    this.titles.set(globalvarible_1.Language.English, "Basic Truth");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "基要真理");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "基要真理");
                }
            case "spirital":
                {
                    this.titles.set(globalvarible_1.Language.English, "");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "基督徒的属灵经历");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "基督徒的屬靈經歷");
                }
            case "matthew":
                {
                    this.titles.set(globalvarible_1.Language.English, "");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "马太福音");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "馬太福音");
                }
            case "Genesis":
                {
                    this.titles.set(globalvarible_1.Language.English, "");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "创世纪");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "創世紀");
                }
            case "Christ_in_Prophesy":
                {
                    this.titles.set(globalvarible_1.Language.English, "");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "预言中的基督");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "預言中的基督");
                }
            case "Heavenly_Vision":
                {
                    this.titles.set(globalvarible_1.Language.English, "");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "天上的异象");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "天上的異象");
                }
            case "Principle_of_God's_Work":
                {
                    this.titles.set(globalvarible_1.Language.English, "");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "神作工的原则");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "神作工的原則");
                }
            case "The_Kingdom_of_Priests":
                {
                    this.titles.set(globalvarible_1.Language.English, "");
                    this.titles.set(globalvarible_1.Language.SimplifyChinese, "祭司的国度");
                    this.titles.set(globalvarible_1.Language.TranditionalChinese, "祭司的國度");
                }
        }
        this.LoadData();
    };
    VideoListComponent.prototype.LoadData = function () {
        var _this = this;
        var filesuffix = "_tr";
        if (globalvarible_1.GlobalVariable.language == globalvarible_1.Language.SimplifyChinese) {
            filesuffix = "_si";
        }
        else if (globalvarible_1.GlobalVariable.language == globalvarible_1.Language.English) {
            filesuffix = "_en";
        }
        this.currentmessagetitle = this.titles.get(globalvarible_1.GlobalVariable.language);
        var fileName = "../../files/biblestudy/Bible_Study_" + this.source + filesuffix + ".json";
        console.log(fileName);
        this.jsonLoadService.getMessageItems(fileName).subscribe(function (response) {
            _this.messagedata = response;
            _this.messagedata.forEach(function (file) {
                file.hasaudio = file.mp3file != "";
                file.hasvideo = file.mp4file != "";
                file.hasnote = file.noteurl != "";
            });
        });
    };
    VideoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'videolist',
            templateUrl: 'videolist.component.html',
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService, router_1.ActivatedRoute, jsonload_service_1.JsonLoadService])
    ], VideoListComponent);
    return VideoListComponent;
}(webpartbase_1.WebPartBase));
exports.VideoListComponent = VideoListComponent;
var VideoItemWithNotes = /** @class */ (function (_super) {
    __extends(VideoItemWithNotes, _super);
    function VideoItemWithNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VideoItemWithNotes;
}(globalvarible_1.VideoOfWorship));
//# sourceMappingURL=videolist.component.js.map