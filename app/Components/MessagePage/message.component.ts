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
    //#region 主日信息
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
    
    historytitles : Map<Language, string>;
    currenthistorytitle:string;
    //#endregion

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }
    
    ngOnInit()
    {
//#region 主日信息
        this.afternoonvideofile = `Videos/English_Worship/18/${GlobalVariable.afternoonmessagefilename}.mp3`;
        this.afternoonaudiofile = `/mp3/Worship/18/${GlobalVariable.afternoonmessagefilename}.mp3`;
        this.morningvideofile = `Videos/Chinese_Worship/18/${GlobalVariable.morningmessagefilename}.mp4`
        this.morningaudiofile = `/mp3/Worship/18/${GlobalVariable.morningmessagefilename}.mp3`;
       
        this.currentmessagetitle = "";
        this.date = GlobalVariable.todaydate;
        this.showhistoryfile = false;
        this.iconfilename = "expand.png";

        this.messagetitles = new Map<Language, string>();
        this.messagetitles.set(Language.English, "Latest Sunday Message");
        this.messagetitles.set(Language.SimplifyChinese, "最新主日信息");
        this.messagetitles.set(Language.TranditionalChinese, "最新主日信息");
        this.informations = new Map<Language, VideoOfWorship[]>();
        this.informations.set(Language.English, [new VideoOfWorship(this.morningvideofile,
                                                                    this.morningaudiofile,
                                                                    GlobalVariable.messagetitleen, 
                                                                    "1:0:20" ,
                                                                    GlobalVariable.speakeren),
                                                new VideoOfWorship(this.afternoonvideofile, 
                                                                    this.afternoonaudiofile,
                                                                    GlobalVariable.afternoonmessagetitle, 
                                                                    "0:44:15" ,
                                                                    GlobalVariable.afternoonspeaker)]);
        this.informations.set(Language.SimplifyChinese, [new VideoOfWorship(this.morningvideofile, 
                                                        this.morningaudiofile,
                                                        GlobalVariable.messagetitlesi, 
                                                        "1:0:20" ,
                                                         GlobalVariable.speakersi)]);
        this.informations.set(Language.TranditionalChinese, [new VideoOfWorship(this.morningvideofile,
                                                         this.morningaudiofile, 
                                                         GlobalVariable.messagetitletr, 
                                                        "1:0:20" ,
                                                         GlobalVariable.speakertr)]);

        
        this.historytitles = new Map<Language, string>();
        this.historytitles.set(Language.English, "Archived Messages");
        this.historytitles.set(Language.SimplifyChinese, "其它主日信息");
        this.historytitles.set(Language.TranditionalChinese, "其它主日信息");
//#endregion
   
    this.LoadData();
        
    }

    LoadData()
    {
        this.currentmessagetitle = this.messagetitles.get(GlobalVariable.language);
        this.currentinformation = this.informations.get(GlobalVariable.language);
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

