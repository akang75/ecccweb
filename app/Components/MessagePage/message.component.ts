import {Component} from '@angular/core';
import { Language, GlobalVariable , VideoOfWorship} from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';
import { JsonLoadService } from '../../Services/jsonload.service';

@Component({
    moduleId: module.id,
    selector: 'message',
    templateUrl: "message.component.html"
})
export class MessageComponent extends WebPartBase{
    //#region 主日信息
    iconfilename: string;
    messagedata : VideoOfWorship[];
    afternoonmessagedata : VideoOfWorship[];
   
    showhistoryfile : boolean;
    messagetitles : Map<Language, string>;
    currentmessagetitle:string;
    morningmessage : VideoOfWorship;
    afternoonmessage : VideoOfWorship;
    messageFileNames : Map<Language, string>;
    
    historytitles : Map<Language, string>;
    currenthistorytitle:string;
    //#endregion

    constructor(languageService : LanguageService, private jsonLoadService : JsonLoadService)
    {
        super(languageService);

    }
    
    ngOnInit()
    {
//#region 主日信息
        this.showhistoryfile = false;
        this.iconfilename = "expand.png";

        this.messagetitles = new Map<Language, string>();
        this.messagetitles.set(Language.English, "Latest Sunday Message");
        this.messagetitles.set(Language.SimplifyChinese, "最新主日信息");
        this.messagetitles.set(Language.TranditionalChinese, "最新主日信息");
        
        
        this.historytitles = new Map<Language, string>();
        this.historytitles.set(Language.English, "Archived Messages");
        this.historytitles.set(Language.SimplifyChinese, "其它主日信息");
        this.historytitles.set(Language.TranditionalChinese, "其它主日信息");

        this.afternoonmessage = new VideoOfWorship("","","","","","");
        this.morningmessage = new VideoOfWorship("","","","","","");
        this.messageFileNames = new Map<Language, string>();
        this.messageFileNames.set(Language.English, "../../files/worships/morning/2018_en.json");
        this.messageFileNames.set(Language.SimplifyChinese, "../../files/worships/morning/2018_si.json");
        this.messageFileNames.set(Language.TranditionalChinese, "../../files/worships/morning/2018_tr.json");

//#endregion
   
    this.LoadData();
        
    }

    LoadData()
    {
        this.currentmessagetitle = this.messagetitles.get(GlobalVariable.language);
        this.currenthistorytitle = this.historytitles.get(GlobalVariable.language);
        this.LoadLatestMessage();
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

    LoadLatestMessage()
    {
        var messageFile = this.messageFileNames.get(GlobalVariable.language);
       
        if(GlobalVariable.language == Language.English)
        {
            var fileName = "../../files/worships/afternoon/2018_en.json";
            this.jsonLoadService.getMessageItems(fileName).subscribe(response => {
                this.afternoonmessagedata = response;
                this.afternoonmessage = this.afternoonmessagedata[0];
            });
        }

        this.jsonLoadService.getMessageItems(messageFile).subscribe(response => {
            this.messagedata = response;
            this.morningmessage = this.messagedata[0];
        });
    }

   
}

