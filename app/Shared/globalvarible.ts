import { OnInit } from "@angular/core";

export enum Language{
    English,
    TranditionalChinese,
    SimplifyChinese
}

export class GlobalVariable{
    static language : Language = Language.TranditionalChinese;
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
    videofilepath : string
    auidofilepath : string
    title : string
    length : string
    speaker: string
}