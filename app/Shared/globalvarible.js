"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["TranditionalChinese"] = 1] = "TranditionalChinese";
    Language[Language["SimplifyChinese"] = 2] = "SimplifyChinese";
})(Language = exports.Language || (exports.Language = {}));
var GlobalVariable = /** @class */ (function () {
    function GlobalVariable() {
    }
    GlobalVariable.language = Language.TranditionalChinese;
    return GlobalVariable;
}());
exports.GlobalVariable = GlobalVariable;
//# sourceMappingURL=globalvarible.js.map