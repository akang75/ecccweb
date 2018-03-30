import {Component} from '@angular/core';
import { Language, GlobalVariable } from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';
import { JsonLoadService } from '../../Services/jsonload.service';

@Component({
    moduleId: module.id,
    selector: 'oldmessage',
    template: ` 
                <table class="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <td colspan="6">
                                <div class="search_categories">
                                    <div class="select">
                                        <select name="search_categories" id="search_categories" (change)="LoadDataByYear($event.target.value)">
                                            <option *ngFor="let year of years" [value]="year" >{{year}}</option>
                                        </select>
                                    </div>
                                 </div>
                            </td>
                        </tr>
                        <tr *ngFor="let message of messagedata">
                            <td>{{message.date}}</td>
                            <td>{{message.title}}</td>
                            <td>{{message.speaker}}</td>
                            <td><a href="{{message.mp4file}}"><img alt="watch online" src="images/play.png" class="fontsizebutton"/></a></td>
                            <td><a href="{{message.mp3file}}"><img alt="listen online" src="images/playaudio.png" class="fontsizebutton"/></a></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>`
    
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