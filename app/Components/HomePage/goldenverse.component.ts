import {Component} from '@angular/core';
import {GlobalVariable, IVerseItem} from '../../Shared/globalvarible';
import {Language} from '../../Shared/globalvarible';
import {LanguageService} from '../../Services/language.service'
import {Subscription} from 'rxjs/Subscription';
import {JsonLoadService } from '../../Services/jsonload.service';
import 'rxjs/add/operator/map';
import { WebPartBase } from '../../Shared/webpartbase';

@Component({
    selector: 'goldenverse',
    template: `<link href="../style/contentcss.css" rel="stylesheet">
            <div id="ContentBoxGray">
				<h3>{{title}}</h3>
				<div id="BoxContent">
				<div id="GoldenVerse"><p>{{verse}}</p><p> - {{source}}</p></div>				
				</div>
			</div>
    `
})
export class GlodenVerseComponent extends WebPartBase {
    fileNames : Map<Language, string>;
    subscription: Subscription;
    versedata: IVerseItem[];
    verse:string;
    source:string;

    constructor(private languageService : LanguageService, private jsonLoadService : JsonLoadService){
        super();
        this.fileNames = new Map<Language, string>();
        this.fileNames.set(Language.English, "../../files/Goden_Verse_en.json");
        this.fileNames.set(Language.SimplifyChinese, "../../files/Goden_Verse_si.json");
        this.fileNames.set(Language.TranditionalChinese, "../../files/Goden_Verse_tr.json");

        this.titles.set(Language.English, "Daily Verse");
        this.titles.set(Language.SimplifyChinese, "每日金句");
        this.titles.set(Language.TranditionalChinese, "每日金句");

        this.LoadVerse(Language[GlobalVariable.language]);
        this.subscription = languageService.currentLanguage$.subscribe(
            language => {
                this.LoadVerse(language);
        });
    }

    LoadVerse(language:string)
    {
        var fileName = this.fileNames.get(Language[language]);
        this.title = this.titles.get(Language[language]);
        this.jsonLoadService.getVerseItems(fileName).subscribe(response => {
            this.versedata = response;
            var index = Math.floor(Math.random() * (this.versedata.length + 1));
            this.verse = this.versedata[index].text;
            this.source = this.versedata[index].from;
            
        });  
        
    }
    
}

