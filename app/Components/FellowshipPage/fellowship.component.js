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
var FellowshipComponent = /** @class */ (function (_super) {
    __extends(FellowshipComponent, _super);
    function FellowshipComponent(languageService) {
        return _super.call(this, languageService) || this;
    }
    FellowshipComponent.prototype.ngOnInit = function () {
        this.Baptisms = [new globalvarible_1.ImageIcon("/images/Event/080712_Street_fair_TN.jpg", "2008/07/12", "http://sdrv.ms/QglqqE", ""),
            new globalvarible_1.ImageIcon("/images/Event/100710_Street_fair_TN.jpg", "2010/07/10", "http://sdrv.ms/QglmqE", ""),
            new globalvarible_1.ImageIcon("/images/Event/1107090_Street_fair_TN.jpg", "2011/07/09", "http://sdrv.ms/QglkPz", ""),
            new globalvarible_1.ImageIcon("/images/Event/120714_street_fair_TN.jpg", "2012/08/17", "http://sdrv.ms/MDoRFg", "")
        ];
    };
    FellowshipComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fellowship',
            templateUrl: "fellowship.component.html",
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], FellowshipComponent);
    return FellowshipComponent;
}(webpartbase_1.WebPartBase));
exports.FellowshipComponent = FellowshipComponent;
//# sourceMappingURL=fellowship.component.js.map