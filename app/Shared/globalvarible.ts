import { OnInit } from "@angular/core";

export enum Language{
    English,
    TranditionalChinese,
    SimplifyChinese
}

export class GlobalVariable{
    static language : Language = Language.TranditionalChinese;

    //主日信息
    static readonly  morningmessagefilename : string = "20180325 Its Whats Inside that Counts [Pastor Johnny To]";
    static readonly  afternoonmessagefilename : string = "20180318 The Kings Calling -To be the disciple of the Lord eng [Brother Jonathan Pong]";
    static readonly  todaydate : string = "3/18/2018";

    static readonly  messagetitlesi : string = "主的呼召-作主的门徒 (1)";
    static readonly  messagetitletr : string = "主的呼召-作主的門徒 (1) ";
    static readonly  messagetitleen : string = "The King’s Calling -To be the disciple of the Lord ";
    static readonly  afternoonmessagetitle : string = "Heroes of Faith";

    static readonly  speakersi : string = "彭动平弟兄";
    static readonly  speakertr : string = "彭動平弟兄";
    static readonly  speakeren : string = "Brother Jonathan Pong";
    static readonly  afternoonspeaker : string = "Mike Wong" ;

    //福音晚會
    static readonly  gospelfilename : string = "20180224 Joy in Your Presence and Eternal Pleasures [Eric Wu]";
    static readonly  englishgospelfilename : string = "20130928 The Kingdom of Me";
    
    static readonly  gospeltitlesi : string = "满足的喜乐，永远的福乐";
    static readonly  gospeltitletr : string = "滿足的喜樂，永遠的福樂 ";
    static readonly  gospeltitleen : string = "The Kingdom of \"Me\"";

    static readonly  gospelspeakersi : string = "吴淼尧弟兄";
    static readonly  gospelspeakertr : string = "吳淼堯弟兄";
    static readonly  gospelspeakeren : string = "Pastor Solomon Liu";

    static readonly  workingfilename : string = "20180224 Joy in Your Presence and Eternal Pleasures [Eric Wu]";
    
    static readonly  workingtitlesi : string = "中国大陆事工分享(1)";
    static readonly  workingtitletr : string = "中國大陸事工分享(1)";
    static readonly  workingtitleen : string = "China missionary sharing (1)";

    static readonly  workingspeakersi : string = "赵弟兄和罗娜姐妹";
    static readonly  workingspeakertr : string = "趙弟兄和羅娜姐妹";
    static readonly  workingspeakeren : string = "Brother Zhao and Sister Luona";

    OnInit()
    {
        

    }
}

export interface IVerseItem{
    text:string;
    from:string;
    version:string;  
}

export class VideoOfWorship
{
    public hasvideo:boolean;
    public hasaudio:boolean;
    public hasspeaker:boolean;
    public hasdate:boolean;
    constructor(
                public mp4file : string,
                public mp3file : string,
                public title : string,
                public length : string,
                public speaker: string,
                public date : string
                )
    {
        this.hasaudio = this.mp3file != ""; 
        this.hasvideo = this.mp4file != "";  
        this.hasspeaker = this.speaker != "";  
        this.hasdate = this.date != ""; 
    }
}

export class VideoItemWithNotes extends VideoOfWorship
{
    public noteurl:string
    public hasnote:boolean
}

export class ImageIcon
{
    public hasvideo:boolean;
    constructor(public imagepath : string, 
                public date: string,
                public onedrivepath:string,
                public videofilepath:string
                )
    {
        this.hasvideo = this.videofilepath != "";
    }

}