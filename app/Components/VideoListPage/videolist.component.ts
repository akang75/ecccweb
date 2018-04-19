import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable, VideoOfWorship, VideoItemWithNotes} from '../../Shared/globalvarible';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonLoadService } from '../../Services/jsonload.service';

@Component({
    moduleId: module.id,
    selector: 'videolist',
    templateUrl: 'videolist.component.html',
})
export class VideoListComponent extends WebPartBase{
    source:string
    paramsSub: any
    messagedata : VideoItemWithNotes[];
    titles : Map<Language, string>;
    currentmessagetitle : string;
    
    constructor(languageService : LanguageService, private activatedRoute: ActivatedRoute, private jsonLoadService : JsonLoadService)
    {
        super(languageService);
        
    }

    ngOnInit()
    {

        this.paramsSub = this.activatedRoute.queryParams.subscribe(params => {
            this.source = params['source'];
         });

        this.titles = new Map<Language, string>();
        switch(this.source)
        {
            case "basic_truth":
            {
                this.titles.set(Language.English, "Basic Truth");
                this.titles.set(Language.SimplifyChinese, "基要真理");
                this.titles.set(Language.TranditionalChinese, "基要真理");
                break;
            }
            case "spirital":
            {
                this.titles.set(Language.English, "");
                this.titles.set(Language.SimplifyChinese, "基督徒的属灵经历");
                this.titles.set(Language.TranditionalChinese, "基督徒的屬靈經歷");
                break;
            }
            case "matthew":
            {
                this.titles.set(Language.English, "");
                this.titles.set(Language.SimplifyChinese, "马太福音");
                this.titles.set(Language.TranditionalChinese, "馬太福音");
                break;
            }
            case "Genesis":
            {
                this.titles.set(Language.English, "");
                this.titles.set(Language.SimplifyChinese, "创世纪");
                this.titles.set(Language.TranditionalChinese, "創世紀");
                break;
            }
            case "Christ_in_Prophesy":
            {
                this.titles.set(Language.English, "");
                this.titles.set(Language.SimplifyChinese, "预言中的基督");
                this.titles.set(Language.TranditionalChinese, "預言中的基督");
                break;
            }
            case "Heavenly_Vision":
            {
                this.titles.set(Language.English, "");
                this.titles.set(Language.SimplifyChinese, "天上的异象");
                this.titles.set(Language.TranditionalChinese, "天上的異象");
                break;
            }
            case "Principle_of_God's_Work":
            {
                this.titles.set(Language.English, "");
                this.titles.set(Language.SimplifyChinese, "神作工的原则");
                this.titles.set(Language.TranditionalChinese, "神作工的原則");
                break;
            }
            case "The_Kingdom_of_Priests":
            {
                this.titles.set(Language.English, "");
                this.titles.set(Language.SimplifyChinese, "祭司的国度");
                this.titles.set(Language.TranditionalChinese, "祭司的國度");
                break;
            }
        }

         this.LoadData();
    }

    LoadData()
    {
        var filesuffix = "_tr";
        if(GlobalVariable.language == Language.SimplifyChinese)
        {
            filesuffix = "_si";
        }
        else if(GlobalVariable.language == Language.English)
        {
            filesuffix = "_en";
        }
        this.currentmessagetitle = this.titles.get(GlobalVariable.language);

        var fileName = "../../files/biblestudy/Bible_Study_"+ this.source + filesuffix + ".json";
       
        this.jsonLoadService.getMessageWithNotesItems(fileName).subscribe(response => {
            this.messagedata = response;
            this.messagedata.forEach((file)=>{
                file.hasaudio = file.mp3file != "";
                file.hasvideo = file.mp4file != "";
                file.hasnote = file.noteurl != "";
            })
        });
    }
}

