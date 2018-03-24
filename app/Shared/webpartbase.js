"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalvarible_1 = require("./globalvarible");
var WebPartBase = /** @class */ (function () {
    function WebPartBase(languageService) {
        var _this = this;
        this.languageService = languageService;
        this.titles = new Map();
        this.subscription = this.languageService.currentLanguage$.subscribe(function (language) {
            _this.LoadData();
            _this.isenglish = globalvarible_1.GlobalVariable.language == globalvarible_1.Language.English;
            _this.issimplifychinese = globalvarible_1.GlobalVariable.language == globalvarible_1.Language.SimplifyChinese;
            _this.istraditionalchinese = globalvarible_1.GlobalVariable.language == globalvarible_1.Language.TranditionalChinese;
        });
        this.isenglish = globalvarible_1.GlobalVariable.language == globalvarible_1.Language.English;
        this.issimplifychinese = globalvarible_1.GlobalVariable.language == globalvarible_1.Language.SimplifyChinese;
        this.istraditionalchinese = globalvarible_1.GlobalVariable.language == globalvarible_1.Language.TranditionalChinese;
    }
    WebPartBase.prototype.ngOnInit = function () {
    };
    WebPartBase.prototype.LoadData = function () {
    };
    return WebPartBase;
}());
exports.WebPartBase = WebPartBase;
//# sourceMappingURL=webpartbase.js.map