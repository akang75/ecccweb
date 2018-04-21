import { OnInit } from "@angular/core";

export enum Language{
    English,
    TranditionalChinese,
    SimplifyChinese
}

export class GlobalVariable{
    static language : Language = Language.TranditionalChinese;

    //主日信息
    static readonly  todaydate : string = "3/18/2018";

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