import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable} from '../../Shared/globalvarible';
import { JsonLoadService } from '../../Services/jsonload.service';

@Component({
    moduleId: module.id,
    selector: 'message',
    templateUrl: "home.component.html",
})
export class HomeComponent extends WebPartBase{

    fileNames : Map<Language, string>;
    versedata: VerseItem[];
    verseItem: VerseItem;

    todaydate : string = "";
    morningvideofile : string = "";
    morningaudiofile : string = "";
    afternoonvideofile : string = "";
    afternoonaudiofile : string ="";

    titleen: string;
    titlesi: string;
    titletr: string

    constructor(languageService : LanguageService, private jsonLoadService : JsonLoadService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        this.verseItem = {text:"", from:"", version:""};
        this.fileNames = new Map<Language, string>();
        this.fileNames.set(Language.English, "../../files/Goden_Verse_en.json");
        this.fileNames.set(Language.SimplifyChinese, "../../files/Goden_Verse_si.json");
        this.fileNames.set(Language.TranditionalChinese, "../../files/Goden_Verse_tr.json");

        this.titles.set(Language.English, "Daily Verse");
        this.titles.set(Language.SimplifyChinese, "每日金句");
        this.titles.set(Language.TranditionalChinese, "每日金句");

        this.titleen = GlobalVariable.messagetitleen + " - " + GlobalVariable.speakeren;
        this.titlesi = GlobalVariable.messagetitlesi + " - " + GlobalVariable.speakersi;
        this.titletr = GlobalVariable.messagetitletr + " - " + GlobalVariable.speakertr;

        this.todaydate = GlobalVariable.todaydate;
        this.afternoonvideofile = `Videos/English_Worship/18/${GlobalVariable.afternoonmessagefilename}.mp3`;
        this.afternoonaudiofile = `/mp3/Worship/18/${GlobalVariable.afternoonmessagefilename}.mp3`;
        this.morningvideofile = `Videos/Chinese_Worship/18/${GlobalVariable.morningmessagefilename}.mp4`
        this.morningaudiofile = `/mp3/Worship/18/${GlobalVariable.morningmessagefilename}.mp3`;
        this.LoadData();
    }

    LoadData()
    {
        var fileName = this.fileNames.get(GlobalVariable.language);
        this.title = this.titles.get(GlobalVariable.language);
        this.jsonLoadService.getVerseItems(fileName).subscribe(response => {
            this.versedata = response;
            var index = Math.floor(Math.random() * (response.length + 1));
            this.verseItem = response[index];
        });  
        
    }
}

export interface VerseItem{
    text:string;
    from:string;
    version:string;  
}