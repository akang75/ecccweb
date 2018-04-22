import {Component} from '@angular/core';
import { Language, GlobalVariable} from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';

@Component({
    moduleId: module.id,
    selector: 'churchmessage',
    templateUrl: "churchmessage.component.html"
})
export class ChurchMessageComponent extends WebPartBase{
    todaydate : string = "";
//#region bulliten
    bullitentitles :Map<Language, string>;
    currentbullitentitle:string;
    bullitens : Map<Language, string[]>;
    currentBulliten:string[];
//#endregion

//#region prayer
    prayertitles :Map<Language, string>;
    currentprayertitle:string;
    prayers : Map<Language, string[]>;
    currentprayer:string[];
//#endregion

//#region  gospel meeting
    gospeltitles :Map<Language, string>;
    gospelletters :Map<Language, string>;
    currentgospeltitle:string;
    currentgospelletter:string;
//#endregion

//#region  VBS
    vbstitles :Map<Language, string>;
    vbsmessages :Map<Language, string>;
    currentvbsltitle:string;
    currentvbsmessage:string;
//#endregion

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }
    
    ngOnInit()
    {
//#region bulliten
        this.bullitentitles = new Map<Language, string>();
        this.bullitentitles.set(Language.English, "ANNOUNCEMENTS");
        this.bullitentitles.set(Language.SimplifyChinese, "报告事项");
        this.bullitentitles.set(Language.TranditionalChinese, "報告事項");
        this.bullitens = new Map<Language, string[]>();
        this.bullitens.set(Language.English, ['In keeping with the theme of our church this year, the coming gospel night is scheduled on April 21 (Saturday) at 5:30 to 8:30 p.m. The speaker is Brother Pong. Brothers and sisters, please pray earnestly for the salvation of lost souls , participate in the ministry and invite unbelieving relatives and friends to attend.'
                                             ,'The 2018 VBS will be held from August 6 to August 10. The theme is "SHIPWRECKED”: Rescued by Jesus. Parents of children between the ages of 4 and 12 (preschool to sixth grade) are welcome to enroll. The registration fee is $15 per child. The registration form for children and the service form for brothers and sisters who volunteer to serve are on the outside counter. Please fill in the forms and give it to sister Alicia or cast in the offering box. If you have any question, please contact sister L.C. at chenhuanlc@gmail.com or tel. 425-229-9231.'
                                             ,'Cambodia short term mission will be this August. High school students or adults who have baptized are welcome to register with brother Jun Li.']);
        this.bullitens.set(Language.SimplifyChinese, ['配合今年教会的主题，再来的福音晚会订在四月二十一日（周六）晚上5:30 到 8:30，讲员是彭动平弟兄。请弟兄姊妹为人的灵魂得救迫切祷告，踊跃参与服事并邀请未信主的亲戚朋友参加。'
                                                     ,'2018年暑期圣经学校订在八月六日至八月十日举行。主题是「船沉了：耶稣拯救」。欢迎家里有四岁到十二岁孩童（幼儿园到六年级学生）的父母报名参加，报名费每人$15。孩童报名表以及自愿参与服事的弟兄妹的服事表格，都在外面柜台上。报名表填好请交给陈霞姊妹或投在奉献箱内。您有任何疑问请洽陈环姊妹(chenhuanlc@gmail.com, 电话425-229-9231）。'
                                                     ,'教会柬埔寨短宣将在今年8月举行，受洗的高中生或成人可以向李俊弟兄报名。']);
        this.bullitens.set(Language.TranditionalChinese, ['配合今年教會的主題，再來的福音晚會訂在四月二十一日（週六）晚上5:30 到 8:30，講員是彭動平弟兄。請弟兄姊妹為人的靈魂得救迫切禱告，踴躍参與服事並邀請未信主的親戚朋友參加。'
                                                         ,'2018年暑期聖經學校訂在八月六日至八月十日舉行。主題是「船沈了：耶穌拯救」。歡迎家裡有四歲到十二歲孩童（幼兒園到六年級學生）的父母報名參加，報名費每人$15。孩童報名表以及自願參與服事的弟兄妹的服事表格，都在外面櫃檯上。報名表填好請交給陳霞姊妹或投在奉獻箱内。您有任何疑問請洽陳環姊妹(chenhuanlc@gmail.com, 電話425-229-9231）。'
                                                         ,'教會柬埔寨短宣將在今年8月舉行，受洗的高中生或成人可以向李俊弟兄報名。']);
        
//#endregion

//#region prayer
        this.prayertitles = new Map<Language, string>();
        this.prayertitles.set(Language.English, "Prayer Requests");
        this.prayertitles.set(Language.SimplifyChinese, "代祷事项");
        this.prayertitles.set(Language.TranditionalChinese, "代禱事項");
        this.prayers = new Map<Language, string[]>();
        this.prayers.set(Language.English, ['for Brother Austin and Sister Feyon in India '
                                            ,'for Brother Ka’egso and Sister Eipeen in Brazil'
                                            ,'for Sister Graci in Brazil'
                                            ,'for Sister Janice in Cambodia'
                                            ,'for Brother Kevin Chen and Sister Samantha at InterCP'
                                        ]);
        this.prayers.set(Language.SimplifyChinese, ['在印度服事的Austin弟兄和林惜云姊妹'
                                                     ,'在巴西服事的Ka’egso弟兄和黄仪平姊妹'
                                                     ,'在巴西服事的Graci姊妹'
                                                     ,'在柬埔寨的卢洁香姊妹'
                                                     ,'在InterCP的陈元瀚弟兄和Samantha姊妹'
                                                    ]);
        this.prayers.set(Language.TranditionalChinese, ['在印度服事的Austin弟兄和林惜雲姊妹'
                                                    ,'在巴西服事的Ka’egso弟兄和黃儀平姊妹'
                                                    ,'在巴西服事的Graci姊妹'
                                                    ,'在柬埔寨的盧潔香姊妹'
                                                    ,'在InterCP的陳元瀚弟兄和Samantha姊妹'
                                                ]);
        
//#endregion

//#region gospel invitation
        this.gospeltitles = new Map<Language, string>();
        this.gospeltitles.set(Language.English, "Gospel Invitation");
        this.gospeltitles.set(Language.SimplifyChinese, "福音晚会邀请函");
        this.gospeltitles.set(Language.TranditionalChinese, "福音晚會邀請函");

        this.gospelletters = new Map<Language, string>();
        this.gospelletters.set(Language.English, "");

        this.gospelletters.set(Language.SimplifyChinese, `
        <p>亲爱的朋友:</p>
        <p>东区基督教会的弟兄姐妹热忱邀请您阖府前来参加福音晚会。并且欢迎您会前与我们共进晚餐。 期待与您分享主耶稣赐给我们的真理和生命。 愿赐人平安和恩典的神祝福您和您的全家。</p>
        <p>
        讲员: 彭动平
        </p>
        <p>
        晚餐时间: 5:30 PM—7:00 PM <br/>
        聚会时间: 7:00 PM—9:00 PM, 4/21/2018(週六)
        </p>
        <p>地点: 东区基督教会团契中心
        3615 164th PL. SE, 
        Bellevue, WA 98008
        </p>
        <p><a href="/images/event/GospelNight042118.jpg">福音单张</a></p>
        `);
        this.gospelletters.set(Language.TranditionalChinese, `
        <p>亲爱的朋友:</p>
        <p>东区基督教会的弟兄姐妹热忱邀请您阖府前来参加福音晚会。并且欢迎您会前与我们共进晚餐。 期待与您分享主耶稣赐给我们的真理和生命。 愿赐人平安和恩典的神祝福您和您的全家。</p>
        <p>
        讲员: 彭动平
        </p>
        <p>
        晚餐时间: 5:30 PM—7:00 PM <br/>
        聚会时间: 7:00 PM—9:00 PM, 4/21/2018(週六)
        </p>
        <p>地点: 东区基督教会团契中心
        3615 164th PL. SE, 
        Bellevue, WA 98008
        </p>
        <p><a href="/images/event/GospelNight042118.jpg">福音單張</a>
        `);
//#endregion

//region vbs
        this.vbstitles = new Map<Language, string>();
        this.vbstitles.set(Language.English, "Gospel Invitation");
        this.vbstitles.set(Language.SimplifyChinese, "2018 假期圣经学校");
        this.vbstitles.set(Language.TranditionalChinese, "2018 假期聖經學校");

        this.vbsmessages = new Map<Language, string>();
        this.vbsmessages.set(Language.English, "");

        this.vbsmessages.set(Language.SimplifyChinese, `
       		<p>2018年暑期圣经学校订在八月六日至八月十日举行。主题是「船沉了：耶稣拯救」。欢迎家里有四岁到十二岁孩童（幼儿园到六年级学生）的父母报名参加，报名费每人$15。</p>
			<br/>
			<p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeeojKpwqbE-6pUM9Uvt9dHR0Fm5z3HPtfmZkG3nFYpk8U0hA/viewform?c=0&w=1" target="_blank">网上报名</a></p>
			<p><a href="http://tinyurl.com/ECCC2018VBS" target="_blank">下载报名表</a></p>
        `);
        this.vbsmessages.set(Language.TranditionalChinese, `
            <p>2018年暑期聖經學校訂在八月六日至八月十日舉行。主題是「船沉了：耶穌拯救」。歡迎家裡有四歲到十二歲孩童（幼兒園到六年級學生）的父母報名參加，報名費每人$15。</p>
            <br/>
            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeeojKpwqbE-6pUM9Uvt9dHR0Fm5z3HPtfmZkG3nFYpk8U0hA/viewform?c=0&w=1" target="_blank">網上報名</a></p>
            <p><a href="http://tinyurl.com/ECCC2018VBS" target="_blank">下載報名表</a></p>
         `);
//#endregion
        this.LoadData();
        
    }

    LoadData()
    {
        this.currentBulliten = this.bullitens.get(GlobalVariable.language);
        this.currentbullitentitle = this.bullitentitles.get(GlobalVariable.language);

        this.currentprayertitle = this.prayertitles.get(GlobalVariable.language);
        this.currentprayer = this.prayers.get(GlobalVariable.language);

        this.currentgospeltitle = this.gospeltitles.get(GlobalVariable.language);
        this.currentgospelletter = this.gospelletters.get(GlobalVariable.language);

        this.currentvbsltitle = this.vbstitles.get(GlobalVariable.language);
        this.currentvbsmessage = this.vbsmessages.get(GlobalVariable.language);
    }

}

