import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable, VideoOfWorship} from '../../Shared/globalvarible';
import { JsonLoadService } from '../../Services/jsonload.service';

@Component({
    moduleId: module.id,
    selector: 'message',
    templateUrl: "home.component.html",
})
export class HomeComponent extends WebPartBase{

    versefileNames : Map<Language, string>;
    versedata: VerseItem[];
    verseItem: VerseItem;

    messageFileNames : Map<Language, string>;
    messagedata : VideoOfWorship[];
    afternoonmessagedata : VideoOfWorship[];
    morningmessage : VideoOfWorship;
    afternoonmessage : VideoOfWorship;

    todaydate : string = "";
   
    constructor(languageService : LanguageService, private jsonLoadService : JsonLoadService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        this.verseItem = {text:"", from:"", version:""};
        this.versefileNames = new Map<Language, string>();
        this.versefileNames.set(Language.English, "../../files/Goden_Verse_en.json");
        this.versefileNames.set(Language.SimplifyChinese, "../../files/Goden_Verse_si.json");
        this.versefileNames.set(Language.TranditionalChinese, "../../files/Goden_Verse_tr.json");

        this.messageFileNames = new Map<Language, string>();
        this.messageFileNames.set(Language.English, "../../files/worships/morning/2018_en.json");
        this.messageFileNames.set(Language.SimplifyChinese, "../../files/worships/morning/2018_si.json");
        this.messageFileNames.set(Language.TranditionalChinese, "../../files/worships/morning/2018_tr.json");

        this.titles.set(Language.English, "Daily Verse");
        this.titles.set(Language.SimplifyChinese, "每日金句");
        this.titles.set(Language.TranditionalChinese, "每日金句");

    this.afternoonmessage = new VideoOfWorship("","","","","","");
    this.morningmessage = new VideoOfWorship("","","","","","");
        this.todaydate = GlobalVariable.todaydate;

        this.LoadData();
    }

    LoadData()
    {
        var fileName = this.versefileNames.get(GlobalVariable.language);
        this.title = this.titles.get(GlobalVariable.language);
        this.jsonLoadService.getVerseItems(fileName).subscribe(response => {
            this.versedata = response;
            var index = Math.floor(Math.random() * (response.length + 1));
            this.verseItem = response[index];
        });  
        this.LoadLatestMessage();
        
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

export interface VerseItem{
    text:string;
    from:string;
    version:string;  
}