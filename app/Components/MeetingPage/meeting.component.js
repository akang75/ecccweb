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
var MeetingComponent = /** @class */ (function (_super) {
    __extends(MeetingComponent, _super);
    function MeetingComponent(languageService) {
        var _this = _super.call(this, languageService) || this;
        console.log(_this.isenglish);
        return _this;
    }
    MeetingComponent.prototype.ngOnInit = function () {
        console.log(this.isenglish);
        this.churchenglish = {
            headerRow: ['Meeting', 'Date and Time'],
            dataRows: [
                ['Sunday Holy Communion ', 'Sunday 9:00 AM - 9:45 AM'],
                ['Sunday Worship', 'Sunday 10:00 AM - 12:00 PM'],
                ['Sunday School', 'Sunday 12:30 PM - 1:15 PM'],
                ['Sunday Worship', 'Sunday 1:30 PM - 3:00 PM'],
                ['Prayer Meeting ', 'Wednesday 7:30 PM - 9:00 PM'],
                ['Awana program', 'Friday 7:30 PM - 9:00 PM']
            ]
        };
        this.fellowshipenglish = {
            headerRow: ['Meeting', 'Date andTime', 'Location', 'Language', 'Contact'],
            dataRows: [
                ['Women\'s Bible Study ', 'Tuesday 9:30 AM', 'Fellowship Center', 'Chinese', 'Anna Chen(425-562-0986)'],
                ['Renew Fellowship', 'Every other Tuesday 7:30 PM', 'George & Elise Chin\'s', 'Chinese', 'Irene Lin(425-277-7822)'],
                ['Adult Bible Study', 'Wednesday 3 PM', '105 Mountain Park Blvd. SW, Issaquah', 'Chinese', ''],
                ['Women\'s Bible Study ', 'Thursday 9:30 AM', 'Fellowship Center', 'Chinese', 'Haibo He(425-865-0401)'],
                ['Fig Fellowship', 'Friday 7:30 PM', 'Fellowship Center', 'Chinese', 'Kenneth Wang(425-463-9984)'],
                ['Olive Tree Fellowship ', 'Friday 7:30 PM', 'Fellowship Center', 'Chinese', 'Tong Chen (425-649-9854) Qing Lin (425-502-8805)'],
                ['Joshua Fellowship', 'Friday 7:30 PM', 'Fellowship Center', 'Chinese', 'Yong Zhang(425-898-1196) Patrick Li(425-449-3068)'],
                ['Mustard Seed Fellowship', 'Friday 7:30 PM ', 'Fellowship Center', 'Chinese', 'Xinyu Zhou (425-533-3766)'],
                ['Jr. High Fellowship', 'Friday 7:30 PM', 'Fellowship Center', 'English', 'Anna Chen(425-562-0986)'],
                ['High School Fellowship', 'Friday 7:30 PM', 'Fellowship Center', 'English', 'Mike Wong(425-891-0010)']
            ]
        };
        this.churchsimplifychinese = {
            headerRow: ['聚会', '日期时间'],
            dataRows: [
                ['主日擘饼 ', '主日 9:00 AM - 9:45 AM'],
                ['主日崇拜', '主日 10:00 AM - 12:00 PM'],
                ['主日学', '主日 12:30 PM - 1:15 PM'],
                ['主日崇拜', '主日 1:30 PM - 3:00 PM'],
                ['祷告会', '周三 7:30 PM - 9:00 PM'],
                ['Awana 儿童课程', '周五 7:30 PM - 9:00 PM']
            ]
        };
        this.fellowshipsimplifychinese = {
            headerRow: ['聚会', '日期时间', '地点', '语言', '联系人'],
            dataRows: [
                ['妇女查经 ', '每周二 9:30 AM', '团契中心', '中文', '陈姿伶(425-562-0986)'],
                ['更新团契', '每隔一周二 7:30 PM', '金昭、刘应淑家', '中文', '林宜蓉(425-277-7822)'],
                ['小组查经', '每周三 3 PM', '105 Mountain Park Blvd. SW, Issaquah', '中文', ''],
                ['妇女查经 ', '每周四 9:30 AM', '团契中心', '中文', '顾莹(425-885-6209)'],
                ['无花果团契', '每周五 7:30 PM', '团契中心', '中文', '王磊(425-463-9984)'],
                ['橄榄树团契 ', '每周五 7:30 PM', '团契中心', '中文', '陈彤 (425-649-9854) 林青 (425-502-8805)'],
                ['约书亚团契', '每周五 7:30 PM', '团契中心', '中文', '张 泳(425-898-1196) 李广平(425-449-3068)'],
                ['芥菜籽团契', '每周五 7:30 PM ', '团契中心', '中文', '周新宇(425-533-3766)'],
                ['初中团契', '每周五 7:30 PM', '团契中心', '英文', '陈姿伶(425-562-0986)'],
                ['高中团契', '每周五 7:30 PM', '团契中心', '英文', '王小谷(425-891-0010)']
            ]
        };
        this.classsimplifychinese = {
            headerRow: ['课程', '地点', '内容', '老师'],
            dataRows: [
                ['成人中文主日学 – 旧约', '副堂', '路得记', '施雅珍，林敏雄'],
                ['成人中文主日学 – 新约', '餐厅 1/2', '哥林多前书', '朱蕴儿，高弟兄'],
                ['英文主日学', '后厨房', 'Zechariah 撒加利亚书', '王小谷 Mike Wong'],
                ['小学生主日学', '幼儿教室 ', '小学生教材', '盛芫晶'],
                ['慕道班', '办公室', '基要真理 1-7 课', '周世康，杨汉云'],
                ['基要真理班', '图书馆', '基要真理 1-16 课', '彭动平, 马赛尔'],
                ['初信造就班', '餐厅 2/2', '路得记', '盛芫晶，刘旭光']
            ]
        };
        this.churchtraditionalchinese = {
            headerRow: ['聚會', '日期時間'],
            dataRows: [
                ['主日擘餅 ', '主日 9:00 AM - 9:45 AM'],
                ['主日崇拜', '主日 10:00 AM - 12:00 PM'],
                ['主日學', '主日 12:30 PM - 1:15 PM'],
                ['主日崇拜', '主日 1:30 PM - 3:00 PM'],
                ['禱告會 ', '週三 7:30 PM - 9:00 PM'],
                ['Awana 兒童課程', '週五 7:30 PM - 9:00 PM']
            ]
        };
        this.fellowshiptraditionalchinese = {
            headerRow: ['聚會', '日期時間', '地點', '語言', '聯係人'],
            dataRows: [
                ['婦女查經 ', '每週二 9:30 AM', '團契中心', '中文', '陳姿伶(425-562-0986)'],
                ['更新團契', '每隔一週二 7:30 PM', '金昭、劉應淑家', '中文', '林宜蓉(425-277-7822)'],
                ['小組查經', '每週三 3 PM', '105 Mountain Park Blvd. SW, Issaquah', '中文', ''],
                ['婦女查經 ', '每週四 9:30 AM', '團契中心', '中文', '顾莹(425-885-6209)'],
                ['無花果團契', '每週五 7:30 PM', '團契中心', '中文', '王磊(425-463-9984)'],
                ['橄欖樹團契 ', '每週五 7:30 PM', '團契中心', '中文', '陳彤 (425-649-9854) 林青 (425-502-8805)'],
                ['約書亞團契', '每週五 7:30 PM', '團契中心', '中文', '張 泳(425-898-1196) 李广平(425-449-3068)'],
                ['芥菜籽團契', '每週五 7:30 PM ', '團契中心', '中文', '周新宇(425-533-3766)'],
                ['初中團契', '每週五 7:30 PM', '團契中心', '英文', '陳姿伶(425-562-0986)'],
                ['高中團契', '每週五 7:30 PM', '團契中心', '英文', '王小谷(425-891-0010)']
            ]
        };
        this.classtraditionalchinese = {
            headerRow: ['課程', '地點', '内容', '老師'],
            dataRows: [
                ['成人中文主日學 – 舊約', '副堂', '路得記', '施雅珍，林敏雄'],
                ['成人中文主日學 – 新約', '餐廳 1/2', '哥林多前書', '朱蘊兒，高弟兄'],
                ['英文主日學', '后廚房', 'Zechariah 撒加利亞書', '王小谷 Mike Wong'],
                ['小學生主日學', '幼兒教室 ', '小學生教材', '盛芫晶'],
                ['慕道班', '辦公室', '基要真理 1-7 課', '周世康，楊漢雲'],
                ['基要真理班', '圖書館', '基要真理 1-16 課', '彭動平, 馬賽爾'],
                ['初信造就班', '餐廳 2/2', '基要真理 8-16 課', '盛芫晶，劉旭光']
            ]
        };
    };
    MeetingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'meeting',
            templateUrl: './meeting.component.html'
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService])
    ], MeetingComponent);
    return MeetingComponent;
}(webpartbase_1.WebPartBase));
exports.MeetingComponent = MeetingComponent;
//# sourceMappingURL=meeting.component.js.map