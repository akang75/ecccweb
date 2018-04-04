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
var MisctopicComponent = /** @class */ (function (_super) {
    __extends(MisctopicComponent, _super);
    function MisctopicComponent(languageService) {
        return _super.call(this, languageService) || this;
    }
    MisctopicComponent.prototype.ngOnInit = function () {
        this.titles.set(globalvarible_1.Language.English, "Special Topic");
        this.titles.set(globalvarible_1.Language.TranditionalChinese, "各類專題");
        this.titles.set(globalvarible_1.Language.SimplifyChinese, "各类专题");
        this.classes = new Map();
        this.classes.set(globalvarible_1.Language.English, [{ title: "Gospel Meeting", routingparamenter: "Gospel", imagepath: "topic.png" },
            { title: "Workship sharing", routingparamenter: "workship", imagepath: "topic.png" },
            { title: "Summer Retreat", routingparamenter: "retreat", imagepath: "topic.png" },
            { title: "Sharing", routingparamenter: "sharing", imagepath: "topic.png" },
            { title: "Growing Kids God's Way", routingparamenter: "growkids", imagepath: "topic.png" }
        ]);
        this.classes.set(globalvarible_1.Language.SimplifyChinese, [{ title: "福音晚會", routingparamenter: "Gospel", imagepath: "topic.png" },
            { title: "事工分享", routingparamenter: "basictruth", imagepath: "topic.png" },
            { title: "夏令会", routingparamenter: "retreat", imagepath: "topic.png" },
            { title: "見证分享", routingparamenter: "mathew", imagepath: "topic.png" },
            { title: "按照神的方式教育孩子", routingparamenter: "growkids", imagepath: "topic.png" }
        ]);
        this.classes.set(globalvarible_1.Language.TranditionalChinese, [{ title: "福音晚会", routingparamenter: "Gospel", imagepath: "topic.png" },
            { title: "事工分享", routingparamenter: "basictruth", imagepath: "topic.png" },
            { title: "夏令會", routingparamenter: "retreat", imagepath: "topic.png" },
            { title: "见證分享", routingparamenter: "mathew", imagepath: "topic.png" },
            { title: "按照神的方式教育孩子", routingparamenter: "growkids", imagepath: "topic.png" }
        ]);
        this.LoadData();
    };
    MisctopicComponent.prototype.LoadData = function () {
        this.currentclasses = this.classes.get(globalvarible_1.GlobalVariable.language);
        this.title = this.titles.get(globalvarible_1.GlobalVariable.language);
    };
    MisctopicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'specialtopic',
            templateUrl: "classlist.component.html"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], MisctopicComponent);
    return MisctopicComponent;
}(webpartbase_1.WebPartBase));
exports.MisctopicComponent = MisctopicComponent;
var ClassItem = /** @class */ (function () {
    function ClassItem() {
    }
    return ClassItem;
}());
//# sourceMappingURL=misctopic.component.js.map