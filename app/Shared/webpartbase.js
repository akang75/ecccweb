"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebPartBase = /** @class */ (function () {
    function WebPartBase(languageService) {
        var _this = this;
        this.languageService = languageService;
        this.titles = new Map();
        this.subscription = languageService.currentLanguage$.subscribe(function (language) {
            _this.LoadData();
        });
    }
    WebPartBase.prototype.LoadData = function () {
    };
    return WebPartBase;
}());
exports.WebPartBase = WebPartBase;
//# sourceMappingURL=webpartbase.js.map