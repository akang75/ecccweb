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
    //主日信息
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
    //福音晚會
    GlobalVariable.gospelfilename = "20180325 Its Whats Inside that Counts [Pastor Johnny To]";
    GlobalVariable.englishgospelfilename = "20180325 Its Whats Inside that Counts [Pastor Johnny To]";
    GlobalVariable.gospeltitlesi = "满足的喜乐，永远的福乐";
    GlobalVariable.gospeltitletr = "滿足的喜樂，永遠的福樂 ";
    GlobalVariable.gospeltitleen = "The Kingdom of \"Me\"";
    GlobalVariable.gospelspeakersi = "吴淼尧弟兄";
    GlobalVariable.gospelspeakertr = "吳淼堯弟兄";
    GlobalVariable.gospelspeakeren = "Pastor Solomon Liu";
    return GlobalVariable;
}());
exports.GlobalVariable = GlobalVariable;
var VideoOfWorship = /** @class */ (function () {
    function VideoOfWorship() {
    }
    return VideoOfWorship;
}());
exports.VideoOfWorship = VideoOfWorship;
var ImageIcon = /** @class */ (function () {
    function ImageIcon() {
    }
    return ImageIcon;
}());
exports.ImageIcon = ImageIcon;
//# sourceMappingURL=globalvarible.js.map