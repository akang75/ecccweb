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
    GlobalVariable.todaydate = "3/18/2018";
    return GlobalVariable;
}());
exports.GlobalVariable = GlobalVariable;
var VideoOfWorship = /** @class */ (function () {
    function VideoOfWorship(mp4file, mp3file, title, length, speaker, date) {
        this.mp4file = mp4file;
        this.mp3file = mp3file;
        this.title = title;
        this.length = length;
        this.speaker = speaker;
        this.date = date;
        this.hasaudio = this.mp3file != "";
        this.hasvideo = this.mp4file != "";
        this.hasspeaker = this.speaker != "";
        this.hasdate = this.date != "";
    }
    return VideoOfWorship;
}());
exports.VideoOfWorship = VideoOfWorship;
var VideoItemWithNotes = /** @class */ (function (_super) {
    __extends(VideoItemWithNotes, _super);
    function VideoItemWithNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VideoItemWithNotes;
}(VideoOfWorship));
exports.VideoItemWithNotes = VideoItemWithNotes;
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