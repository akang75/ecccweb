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
var ChurchMessageComponent = /** @class */ (function (_super) {
    __extends(ChurchMessageComponent, _super);
    //#endregion
    function ChurchMessageComponent(languageService) {
        var _this = _super.call(this, languageService) || this;
        _this.todaydate = "";
        return _this;
    }
    ChurchMessageComponent.prototype.ngOnInit = function () {
        //#region bulliten
        this.bullitentitles = new Map();
        this.bullitentitles.set(globalvarible_1.Language.English, "ANNOUNCEMENTS");
        this.bullitentitles.set(globalvarible_1.Language.SimplifyChinese, "报告事项");
        this.bullitentitles.set(globalvarible_1.Language.TranditionalChinese, "報告事項");
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
        //#endregion
        //#region prayer
        this.prayertitles = new Map();
        this.prayertitles.set(globalvarible_1.Language.English, "Prayer Requests");
        this.prayertitles.set(globalvarible_1.Language.SimplifyChinese, "代祷事项");
        this.prayertitles.set(globalvarible_1.Language.TranditionalChinese, "代禱事項");
        this.prayers = new Map();
        this.prayers.set(globalvarible_1.Language.English, ['for Brother Austin and Sister Feyon in India ',
            'for Brother Ka’egso and Sister Eipeen in Brazil',
            'for Sister Graci in Brazil',
            'for Sister Janice in Cambodia',
            'for Brother Kevin Chen and Sister Samantha at InterCP'
        ]);
        this.prayers.set(globalvarible_1.Language.SimplifyChinese, ['在印度服事的Austin弟兄和林惜云姊妹',
            '在巴西服事的Ka’egso弟兄和黄仪平姊妹',
            '在巴西服事的Graci姊妹',
            '在柬埔寨的卢洁香姊妹',
            '在InterCP的陈元瀚弟兄和Samantha姊妹'
        ]);
        this.prayers.set(globalvarible_1.Language.TranditionalChinese, ['在印度服事的Austin弟兄和林惜雲姊妹',
            '在巴西服事的Ka’egso弟兄和黃儀平姊妹',
            '在巴西服事的Graci姊妹',
            '在柬埔寨的盧潔香姊妹',
            '在InterCP的陳元瀚弟兄和Samantha姊妹'
        ]);
        //#endregion
        //#region gospel invitation
        this.gospeltitles = new Map();
        this.gospeltitles.set(globalvarible_1.Language.English, "Gospel Invitation");
        this.gospeltitles.set(globalvarible_1.Language.SimplifyChinese, "福音晚会邀请函");
        this.gospeltitles.set(globalvarible_1.Language.TranditionalChinese, "福音晚會邀請函");
        this.gospelletters = new Map();
        this.gospelletters.set(globalvarible_1.Language.English, "");
        this.gospelletters.set(globalvarible_1.Language.SimplifyChinese, "\n        <p>\u4EB2\u7231\u7684\u670B\u53CB:</p>\n        <p>\u4E1C\u533A\u57FA\u7763\u6559\u4F1A\u7684\u5F1F\u5144\u59D0\u59B9\u70ED\u5FF1\u9080\u8BF7\u60A8\u9616\u5E9C\u524D\u6765\u53C2\u52A0\u798F\u97F3\u665A\u4F1A\u3002\u5E76\u4E14\u6B22\u8FCE\u60A8\u4F1A\u524D\u4E0E\u6211\u4EEC\u5171\u8FDB\u665A\u9910\u3002 \u671F\u5F85\u4E0E\u60A8\u5206\u4EAB\u4E3B\u8036\u7A23\u8D50\u7ED9\u6211\u4EEC\u7684\u771F\u7406\u548C\u751F\u547D\u3002 \u613F\u8D50\u4EBA\u5E73\u5B89\u548C\u6069\u5178\u7684\u795E\u795D\u798F\u60A8\u548C\u60A8\u7684\u5168\u5BB6\u3002</p>\n        <p>\n        \u8BB2\u5458: \u5F6D\u52A8\u5E73\n        </p>\n        <p>\n        \u665A\u9910\u65F6\u95F4: 5:30 PM\u20147:00 PM <br/>\n        \u805A\u4F1A\u65F6\u95F4: 7:00 PM\u20149:00 PM, 4/21/2018(\u9031\u516D)\n        </p>\n        <p>\u5730\u70B9: \u4E1C\u533A\u57FA\u7763\u6559\u4F1A\u56E2\u5951\u4E2D\u5FC3\n        3615 164th PL. SE, \n        Bellevue, WA 98008\n        </p>\n        <p><a href=\"/images/event/GospelNight042118.jpg\">\u798F\u97F3\u5355\u5F20</a></p>\n        ");
        this.gospelletters.set(globalvarible_1.Language.TranditionalChinese, "\n        <p>\u4EB2\u7231\u7684\u670B\u53CB:</p>\n        <p>\u4E1C\u533A\u57FA\u7763\u6559\u4F1A\u7684\u5F1F\u5144\u59D0\u59B9\u70ED\u5FF1\u9080\u8BF7\u60A8\u9616\u5E9C\u524D\u6765\u53C2\u52A0\u798F\u97F3\u665A\u4F1A\u3002\u5E76\u4E14\u6B22\u8FCE\u60A8\u4F1A\u524D\u4E0E\u6211\u4EEC\u5171\u8FDB\u665A\u9910\u3002 \u671F\u5F85\u4E0E\u60A8\u5206\u4EAB\u4E3B\u8036\u7A23\u8D50\u7ED9\u6211\u4EEC\u7684\u771F\u7406\u548C\u751F\u547D\u3002 \u613F\u8D50\u4EBA\u5E73\u5B89\u548C\u6069\u5178\u7684\u795E\u795D\u798F\u60A8\u548C\u60A8\u7684\u5168\u5BB6\u3002</p>\n        <p>\n        \u8BB2\u5458: \u5F6D\u52A8\u5E73\n        </p>\n        <p>\n        \u665A\u9910\u65F6\u95F4: 5:30 PM\u20147:00 PM <br/>\n        \u805A\u4F1A\u65F6\u95F4: 7:00 PM\u20149:00 PM, 4/21/2018(\u9031\u516D)\n        </p>\n        <p>\u5730\u70B9: \u4E1C\u533A\u57FA\u7763\u6559\u4F1A\u56E2\u5951\u4E2D\u5FC3\n        3615 164th PL. SE, \n        Bellevue, WA 98008\n        </p>\n        <p><a href=\"/images/event/GospelNight042118.jpg\">\u798F\u97F3\u55AE\u5F35</a>\n        ");
        //#endregion
        //region vbs
        this.vbstitles = new Map();
        this.vbstitles.set(globalvarible_1.Language.English, "Gospel Invitation");
        this.vbstitles.set(globalvarible_1.Language.SimplifyChinese, "2018 假期圣经学校");
        this.vbstitles.set(globalvarible_1.Language.TranditionalChinese, "2018 假期聖經學校");
        this.vbsmessages = new Map();
        this.vbsmessages.set(globalvarible_1.Language.English, "");
        this.vbsmessages.set(globalvarible_1.Language.SimplifyChinese, "\n       \t\t<p>2018\u5E74\u6691\u671F\u5723\u7ECF\u5B66\u6821\u8BA2\u5728\u516B\u6708\u516D\u65E5\u81F3\u516B\u6708\u5341\u65E5\u4E3E\u884C\u3002\u4E3B\u9898\u662F\u300C\u8239\u6C89\u4E86\uFF1A\u8036\u7A23\u62EF\u6551\u300D\u3002\u6B22\u8FCE\u5BB6\u91CC\u6709\u56DB\u5C81\u5230\u5341\u4E8C\u5C81\u5B69\u7AE5\uFF08\u5E7C\u513F\u56ED\u5230\u516D\u5E74\u7EA7\u5B66\u751F\uFF09\u7684\u7236\u6BCD\u62A5\u540D\u53C2\u52A0\uFF0C\u62A5\u540D\u8D39\u6BCF\u4EBA$15\u3002</p>\n\t\t\t<br/>\n\t\t\t<p><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSeeojKpwqbE-6pUM9Uvt9dHR0Fm5z3HPtfmZkG3nFYpk8U0hA/viewform?c=0&w=1\" target=\"_blank\">\u7F51\u4E0A\u62A5\u540D</a></p>\n\t\t\t<p><a href=\"http://tinyurl.com/ECCC2018VBS\" target=\"_blank\">\u4E0B\u8F7D\u62A5\u540D\u8868</a></p>\n        ");
        this.vbsmessages.set(globalvarible_1.Language.TranditionalChinese, "\n            <p>2018\u5E74\u6691\u671F\u8056\u7D93\u5B78\u6821\u8A02\u5728\u516B\u6708\u516D\u65E5\u81F3\u516B\u6708\u5341\u65E5\u8209\u884C\u3002\u4E3B\u984C\u662F\u300C\u8239\u6C89\u4E86\uFF1A\u8036\u7A4C\u62EF\u6551\u300D\u3002\u6B61\u8FCE\u5BB6\u88E1\u6709\u56DB\u6B72\u5230\u5341\u4E8C\u6B72\u5B69\u7AE5\uFF08\u5E7C\u5152\u5712\u5230\u516D\u5E74\u7D1A\u5B78\u751F\uFF09\u7684\u7236\u6BCD\u5831\u540D\u53C3\u52A0\uFF0C\u5831\u540D\u8CBB\u6BCF\u4EBA$15\u3002</p>\n            <br/>\n            <p><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSeeojKpwqbE-6pUM9Uvt9dHR0Fm5z3HPtfmZkG3nFYpk8U0hA/viewform?c=0&w=1\" target=\"_blank\">\u7DB2\u4E0A\u5831\u540D</a></p>\n            <p><a href=\"http://tinyurl.com/ECCC2018VBS\" target=\"_blank\">\u4E0B\u8F09\u5831\u540D\u8868</a></p>\n         ");
        //#endregion
        this.LoadData();
    };
    ChurchMessageComponent.prototype.LoadData = function () {
        this.currentBulliten = this.bullitens.get(globalvarible_1.GlobalVariable.language);
        this.currentbullitentitle = this.bullitentitles.get(globalvarible_1.GlobalVariable.language);
        this.currentprayertitle = this.prayertitles.get(globalvarible_1.GlobalVariable.language);
        this.currentprayer = this.prayers.get(globalvarible_1.GlobalVariable.language);
        this.currentgospeltitle = this.gospeltitles.get(globalvarible_1.GlobalVariable.language);
        this.currentgospelletter = this.gospelletters.get(globalvarible_1.GlobalVariable.language);
        this.currentvbsltitle = this.vbstitles.get(globalvarible_1.GlobalVariable.language);
        this.currentvbsmessage = this.vbsmessages.get(globalvarible_1.GlobalVariable.language);
    };
    ChurchMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'churchmessage',
            templateUrl: "churchmessage.component.html"
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], ChurchMessageComponent);
    return ChurchMessageComponent;
}(webpartbase_1.WebPartBase));
exports.ChurchMessageComponent = ChurchMessageComponent;
//# sourceMappingURL=churchmessage.component.js.map