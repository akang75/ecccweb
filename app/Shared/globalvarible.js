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
    GlobalVariable.gospelfilename = "20180224 Joy in Your Presence and Eternal Pleasures [Eric Wu]";
    GlobalVariable.englishgospelfilename = "20130928 The Kingdom of Me";
    GlobalVariable.gospeltitlesi = "满足的喜乐，永远的福乐";
    GlobalVariable.gospeltitletr = "滿足的喜樂，永遠的福樂 ";
    GlobalVariable.gospeltitleen = "The Kingdom of \"Me\"";
    GlobalVariable.gospelspeakersi = "吴淼尧弟兄";
    GlobalVariable.gospelspeakertr = "吳淼堯弟兄";
    GlobalVariable.gospelspeakeren = "Pastor Solomon Liu";
    GlobalVariable.workingfilename = "20180224 Joy in Your Presence and Eternal Pleasures [Eric Wu]";
    GlobalVariable.workingtitlesi = "中国大陆事工分享(1)";
    GlobalVariable.workingtitletr = "中國大陸事工分享(1)";
    GlobalVariable.workingtitleen = "China missionary sharing (1)";
    GlobalVariable.workingspeakersi = "赵弟兄和罗娜姐妹";
    GlobalVariable.workingspeakertr = "趙弟兄和羅娜姐妹";
    GlobalVariable.workingspeakeren = "Brother Zhao and Sister Luona";
    return GlobalVariable;
}());
exports.GlobalVariable = GlobalVariable;
var VideoOfWorship = /** @class */ (function () {
    function VideoOfWorship(mp4file, mp3file, title, length, speaker) {
        this.mp4file = mp4file;
        this.mp3file = mp3file;
        this.title = title;
        this.length = length;
        this.speaker = speaker;
        this.hasaudio = this.mp3file != "";
        this.hasvideo = this.mp4file != "";
    }
    return VideoOfWorship;
}());
exports.VideoOfWorship = VideoOfWorship;
var ImageIcon = /** @class */ (function () {
    function ImageIcon(imagepath, date, onedrivepath, videofilepath) {
        this.imagepath = imagepath;
        this.date = date;
        this.onedrivepath = onedrivepath;
        this.videofilepath = videofilepath;
        this.hasvideo = this.videofilepath != "";
    }
    return ImageIcon;
}());
exports.ImageIcon = ImageIcon;
//# sourceMappingURL=globalvarible.js.map