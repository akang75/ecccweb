import {Component} from '@angular/core';
import { Language, GlobalVariable , VideoOfWorship} from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';

@Component({
    moduleId: module.id,
    selector: 'message',
    templateUrl: "message.component.html"
})
export class MessageComponent extends WebPartBase{
    iconfilename: string;
    todaydate : string = "";
    morningvideofile : string = "";
    morningaudiofile : string = "";
    afternoonvideofile : string = "";
    afternoonaudiofile : string ="";
    date : string;
    
    showhistoryfile : boolean;
    messagetitles : Map<Language, string>;
    currentmessagetitle:string;
    informations : Map<Language, VideoOfWorship[]>;
    currentinformation : VideoOfWorship[];
    
    bullitentitles :Map<Language, string>;
    currentbullitentitle:string;
    bullitens : Map<Language, string[]>;
    currentBulliten:string[];

    historytitles : Map<Language, string>;
    currenthistorytitle:string;
    
    constructor(languageService : LanguageService)
    {
        super(languageService);
    }
    
    ngOnInit()
    {
        this.afternoonvideofile = `Videos/English_Worship/18/${GlobalVariable.afternoonmessagefilename}.mp3`;
        this.afternoonaudiofile = `/mp3/Worship/18/${GlobalVariable.afternoonmessagefilename}.mp3`;
        this.morningvideofile = `Videos/Chinese_Worship/18/${GlobalVariable.morningmessagefilename}.mp4`
        this.morningaudiofile = `/mp3/Worship/18/${GlobalVariable.morningmessagefilename}.mp3`;
       
        this.currentbullitentitle = "";
        this.currentmessagetitle = "";
        this.date = GlobalVariable.todaydate;
        this.showhistoryfile = false;
        this.iconfilename = "expand.png";

        this.messagetitles = new Map<Language, string>();
        this.messagetitles.set(Language.English, "Latest Sunday Message");
        this.messagetitles.set(Language.SimplifyChinese, "最新主日信息");
        this.messagetitles.set(Language.TranditionalChinese, "最新主日信息");
        this.informations = new Map<Language, VideoOfWorship[]>();
        this.informations.set(Language.English, [{videofilepath: this.morningvideofile,
                                                    auidofilepath : this.morningaudiofile,
                                                    title : GlobalVariable.messagetitleen, 
                                                    length:"1:0:20" ,
                                                    speaker: GlobalVariable.speakeren},
                                                 {videofilepath: this.afternoonvideofile, 
                                                    auidofilepath : this.afternoonaudiofile,
                                                    title : GlobalVariable.afternoonmessagetitle, 
                                                    length:"0:44:15" ,
                                                    speaker: GlobalVariable.afternoonspeaker}]);
        this.informations.set(Language.SimplifyChinese, [{videofilepath:this.morningvideofile, 
                                                        auidofilepath : this.morningaudiofile,
                                                        title : GlobalVariable.messagetitlesi, 
                                                        length:"1:0:20" ,
                                                        speaker: GlobalVariable.speakersi}]);
        this.informations.set(Language.TranditionalChinese, [{videofilepath:this.morningvideofile,
                                                        auidofilepath : this.morningaudiofile, 
                                                        title : GlobalVariable.messagetitletr, 
                                                        length:"1:0:20" ,
                                                        speaker: GlobalVariable.speakertr}]);

        this.bullitentitles = new Map<Language, string>();
        this.bullitentitles.set(Language.English, "Church News");
        this.bullitentitles.set(Language.SimplifyChinese, "教会消息");
        this.bullitentitles.set(Language.TranditionalChinese, "教會消息");
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
        
        this.historytitles = new Map<Language, string>();
        this.historytitles.set(Language.English, "Archived Messages");
        this.historytitles.set(Language.SimplifyChinese, "其它主日信息");
        this.historytitles.set(Language.TranditionalChinese, "其它主日信息");
        
        this.LoadData();
        
    }

    LoadData()
    {
        this.currentmessagetitle = this.messagetitles.get(GlobalVariable.language);
        this.currentinformation = this.informations.get(GlobalVariable.language);
        
        this.currentBulliten = this.bullitens.get(GlobalVariable.language);
        this.currentbullitentitle = this.bullitentitles.get(GlobalVariable.language);

        this.currenthistorytitle = this.historytitles.get(GlobalVariable.language);
    }

    ToggleHistory()
    {
        this.showhistoryfile = !this.showhistoryfile;
        if(this.showhistoryfile)
        {
            this.iconfilename = "collapse.png";
        }
        else
        {
            this.iconfilename = "expand.png";
        }
    }
}

