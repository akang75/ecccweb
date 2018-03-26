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
var MessageComponent = /** @class */ (function (_super) {
    __extends(MessageComponent, _super);
    function MessageComponent(languageService) {
        return _super.call(this, languageService) || this;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.morningfile = "#";
        this.afternoonfile = "#";
        this.currentbullitentitle = "";
        this.currentmessagetitle = "";
        this.date = "03/018/2018";
        this.messagetitles = new Map();
        this.messagetitles.set(globalvarible_1.Language.English, "Latest Sunday Message");
        this.messagetitles.set(globalvarible_1.Language.SimplifyChinese, "最新主日信息");
        this.messagetitles.set(globalvarible_1.Language.TranditionalChinese, "最新主日信息");
        this.informations = new Map();
        this.informations.set(globalvarible_1.Language.English, [{ filepath: this.morningfile,
                title: "The King’s Calling -To be the disciple of the Lord - Brother Jonathan Pon",
                length: "1:0:20" },
            { filepath: this.afternoonfile,
                title: "Heroes of Faith - Mike Wong",
                length: "0:44:15" }]);
        this.informations.set(globalvarible_1.Language.SimplifyChinese, [{ filepath: this.morningfile, title: "主的呼召-作主的门徒 (1) - 彭动平弟兄", length: "1:0:20" }]);
        this.informations.set(globalvarible_1.Language.TranditionalChinese, [{ filepath: this.morningfile, title: "主的呼召-作主的門徒 (1) - 彭動平弟兄", length: "1:0:20" }]);
        this.bullitentitles = new Map();
        this.bullitentitles.set(globalvarible_1.Language.English, "Church News");
        this.bullitentitles.set(globalvarible_1.Language.SimplifyChinese, "教会消息");
        this.bullitentitles.set(globalvarible_1.Language.TranditionalChinese, "教會消息");
        this.bullitens = new Map();
        this.bullitens.set(globalvarible_1.Language.English, ['In keeping with the theme of our church this year, the coming gospel night is scheduled on April 21 (Saturday) at 5:30 to 8:30 p.m. The speaker is Brother Pong. Brothers and sisters, please pray earnestly for the salvation of lost souls , participate in the ministry and invite unbelieving relatives and friends to attend.',
            'The 2018 VBS will be held from August 6 to August 10. The theme is "SHIPWRECKED”: Rescued by Jesus. Parents of children between the ages of 4 and 12 (preschool to sixth grade) are welcome to enroll. The registration fee is $15 per child. The registration form for children and the service form for brothers and sisters who volunteer to serve are on the outside counter. Please fill in the forms and give it to sister Alicia or cast in the offering box. If you have any question, please contact sister L.C. at chenhuanlc@gmail.com or tel. 425-229-9231.',
            'Cambodia short term mission will be this August. High school students or adults who have baptized are welcome to register with brother Jun Li.']);
        this.bullitens.set(globalvarible_1.Language.SimplifyChinese, ['配合今年教会的主题，再来的福音晚会订在四月二十一日（周六）晚上5:30 到 8:30，讲员是彭动平弟兄。请弟兄姊妹为人的灵魂得救迫切祷告，踊跃参与服事并邀请未信主的亲戚朋友参加。',
            '2018年暑期圣经学校订在八月六日至八月十日举行。主题是「船沉了：耶稣拯救」。欢迎家里有四岁到十二岁孩童（幼儿园到六年级学生）的父母报名参加，报名费每人$15。孩童报名表以及自愿参与服事的弟兄妹的服事表格，都在外面柜台上。报名表填好请交给陈霞姊妹或投在奉献箱内。您有任何疑问请洽陈环姊妹(chenhuanlc@gmail.com, 电话425-229-9231）。',
            '教会柬埔寨短宣将在今年8月举行，受洗的高中生或成人可以向李俊弟兄报名。']);
        this.bullitens.set(globalvarible_1.Language.TranditionalChinese, ['配合今年教會的主題，再來的福音晚會訂在四月二十一日（週六）晚上5:30 到 8:30，講員是彭動平弟兄。請弟兄姊妹為人的靈魂得救迫切禱告，踴躍参與服事並邀請未信主的親戚朋友參加。',
            '2018年暑期聖經學校訂在八月六日至八月十日舉行。主題是「船沈了：耶穌拯救」。歡迎家裡有四歲到十二歲孩童（幼兒園到六年級學生）的父母報名參加，報名費每人$15。孩童報名表以及自願參與服事的弟兄妹的服事表格，都在外面櫃檯上。報名表填好請交給陳霞姊妹或投在奉獻箱内。您有任何疑問請洽陳環姊妹(chenhuanlc@gmail.com, 電話425-229-9231）。',
            '教會柬埔寨短宣將在今年8月舉行，受洗的高中生或成人可以向李俊弟兄報名。']);
        this.historytitles = new Map();
        this.historytitles.set(globalvarible_1.Language.English, "Archived Messages");
        this.historytitles.set(globalvarible_1.Language.SimplifyChinese, "其它主日信息");
        this.historytitles.set(globalvarible_1.Language.TranditionalChinese, "其它主日信息");
        this.LoadData();
    };
    MessageComponent.prototype.LoadData = function () {
        this.currentmessagetitle = this.messagetitles.get(globalvarible_1.GlobalVariable.language);
        this.currentinformation = this.informations.get(globalvarible_1.GlobalVariable.language);
        this.currentBulliten = this.bullitens.get(globalvarible_1.GlobalVariable.language);
        this.currentbullitentitle = this.bullitentitles.get(globalvarible_1.GlobalVariable.language);
        this.currenthistorytitle = this.historytitles.get(globalvarible_1.GlobalVariable.language);
    };
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'message',
            templateUrl: "message.component.html"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], MessageComponent);
    return MessageComponent;
}(webpartbase_1.WebPartBase));
exports.MessageComponent = MessageComponent;
var VideoOfWorship = /** @class */ (function () {
    function VideoOfWorship() {
    }
    return VideoOfWorship;
}());
//# sourceMappingURL=message.component.js.map