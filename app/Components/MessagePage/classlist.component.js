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
var ClasslistComponent = /** @class */ (function (_super) {
    __extends(ClasslistComponent, _super);
    function ClasslistComponent(languageService) {
        return _super.call(this, languageService) || this;
    }
    ClasslistComponent.prototype.ngOnInit = function () {
        this.titles.set(globalvarible_1.Language.English, "Classes");
        this.titles.set(globalvarible_1.Language.SimplifyChinese, "基督学堂");
        this.titles.set(globalvarible_1.Language.TranditionalChinese, "基督學堂");
        this.classes = new Map();
        this.classes.set(globalvarible_1.Language.English, [{ title: "Basic Truth", routingparamenter: "basictruth", imagepath: "book.png" },
            { title: "Spirital experience", routingparamenter: "spirital", imagepath: "book.png" },
            { title: "Book of Mathew", routingparamenter: "mathew", imagepath: "book.png" }
        ]);
        this.classes.set(globalvarible_1.Language.SimplifyChinese, [{ title: "基要真理", routingparamenter: "basictruth", imagepath: "book.png" },
            { title: "基督徒的属灵经历", routingparamenter: "spirital", imagepath: "book.png" },
            { title: "马太福音", routingparamenter: "mathew", imagepath: "book.png" }
        ]);
        this.classes.set(globalvarible_1.Language.TranditionalChinese, [{ title: "基要真理", routingparamenter: "basictruth", imagepath: "book.png" },
            { title: "基督徒的屬靈經歷", routingparamenter: "spirital", imagepath: "book.png" },
            { title: "馬太福音", routingparamenter: "mathew", imagepath: "book.png" }
        ]);
        this.LoadData();
    };
    ClasslistComponent.prototype.LoadData = function () {
        this.currentclasses = this.classes.get(globalvarible_1.GlobalVariable.language);
        this.title = this.titles.get(globalvarible_1.GlobalVariable.language);
    };
    ClasslistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'classes',
            templateUrl: "classlist.component.html"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], ClasslistComponent);
    return ClasslistComponent;
}(webpartbase_1.WebPartBase));
exports.ClasslistComponent = ClasslistComponent;
var ClassItem = /** @class */ (function () {
    function ClassItem() {
    }
    return ClassItem;
}());
//# sourceMappingURL=classlist.component.js.map