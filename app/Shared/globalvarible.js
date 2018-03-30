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
    GlobalVariable.prototype.OnInit = function () {
    };
    GlobalVariable.language = Language.TranditionalChinese;
    GlobalVariable.morningmessagefilename = "20180325 Its Whats Inside that Counts [Pastor Johnny To]";
    GlobalVariable.afternoonmessagefilename = "20180318 The Kings Calling -To be the disciple of the Lord eng [Brother Jonathan Pong]";
    GlobalVariable.todaydate = "3/18/2018";
    GlobalVariable.messagetitlesi = "主的呼召-作主的门徒 (1)";
    GlobalVariable.messagetitletr = "主的呼召-作主的門徒 (1) ";
    GlobalVariable.messagetitleen = "The King’s Calling -To be the disciple of the Lord ";
    GlobalVariable.afternoonmessagetitle = "Heroes of Faith";
    GlobalVariable.speakersi = "彭动平弟兄";
    GlobalVariable.speakertr = "彭動平弟兄";
    GlobalVariable.speakeren = "Brother Jonathan Pong";
    GlobalVariable.afternoonspeaker = "Mike Wong";
    return GlobalVariable;
}());
exports.GlobalVariable = GlobalVariable;
var VideoOfWorship = /** @class */ (function () {
    function VideoOfWorship() {
    }
    return VideoOfWorship;
}());
exports.VideoOfWorship = VideoOfWorship;
//# sourceMappingURL=globalvarible.js.map