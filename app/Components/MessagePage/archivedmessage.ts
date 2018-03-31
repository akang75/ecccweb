import {Component} from '@angular/core';
import { Language, GlobalVariable } from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';
import { JsonLoadService } from '../../Services/jsonload.service';

@Component({
    moduleId: module.id,
    selector: 'oldmessage',
    templateUrl: "../../Shared/messagelist.html"
    
})
export class ArchivedMessageComponent extends WebPartBase{
    messagedata : MessageItem[];
    years : string[];
    currentyear : string;
    constructor(languageService : LanguageService, private jsonLoadService : JsonLoadService)
    {
        super(languageService);
        
    }

    ngOnInit()
    {
        var start:number = 2005;
        var end:number = 2018;
        this.years = new Array(end-start + 1);
        this.currentyear = end.toString();
        var i : number;
        for(i = start;i<=end;i++)
        {
            this.years[end-i] = i.toString();
        }
        this.LoadData();
    }

    LoadData()
    {
        this.LoadDataByYear(this.currentyear);
    }

    LoadDataByYear(year:string)
    {
        this.currentyear = year;
        var filesuffix = "_tr";
        if(GlobalVariable.language == Language.SimplifyChinese)
        {
            filesuffix = "_si";
        }
        else if(GlobalVariable.language == Language.English)
        {
            filesuffix = "_en";
        }

        var fileName = "../../files/worships/" + year + "/" + year + filesuffix + ".json";
        console.log(fileName);
        this.jsonLoadService.getMessageItems(fileName).subscribe(response => {
            this.messagedata = response;
            console.log(this.messagedata);
        });
    }
}

export class MessageItem
{
    title:string ;
    date:string;
    speaker: string;
    mp4file: string;
    mp3file: string;
}