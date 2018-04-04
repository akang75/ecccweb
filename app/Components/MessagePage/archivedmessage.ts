import {Component} from '@angular/core';
import { Language, GlobalVariable, VideoOfWorship } from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';
import { JsonLoadService } from '../../Services/jsonload.service';

@Component({
    moduleId: module.id,
    selector: 'oldmessage',
    templateUrl: "archivedmessage.html"
    
})
export class ArchivedMessageComponent extends WebPartBase{
    messagedata : VideoOfWorship[];
    years : string[];
    currentyear : string;
    timeofdate : string;
    constructor(languageService : LanguageService, private jsonLoadService : JsonLoadService)
    {
        super(languageService);
        
    }

    ngOnInit()
    {
        this.currentyear = "2018";
        this.LoadData();
    }

    LoadYearList()
    {
        var start:number = 2005;
        if(this.timeofdate == "afternoon")
        {
            start = 2017
        }
        var end:number = 2018;
        this.years = new Array(end-start + 1);
        
        var i : number;
        for(i = start;i<=end;i++)
        {
            this.years[end-i] = i.toString();
        }
    }

    SetTimeOfDate(timeofdate : string)
    {
        this.timeofdate = timeofdate;
        this.LoadData();
    }

    LoadData()
    {
        if(GlobalVariable.language != Language.English)
        {
            this.timeofdate = "morning";
        }

        if(this.timeofdate == "afternoon" && +this.currentyear < 2017 )
        {
            this.currentyear = "2018";
        }
        this.LoadYearList()
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

        var fileName = "../../files/worships/"+ this.timeofdate +"/" + year + filesuffix + ".json";
        this.jsonLoadService.getMessageItems(fileName).subscribe(response => {
            this.messagedata = response;
            this.messagedata.forEach((file)=>{
                var twodigyear = year.substring(2);
                file.hasaudio = file.mp3file != "";
                
                file.hasvideo = file.mp4file != "";
                
            })
        });
    }
}
