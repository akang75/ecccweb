import {Component} from '@angular/core';
import {GlobalVariable, IVerseItem} from '../../Shared/globalvarible';
import {Language} from '../../Shared/globalvarible';
import {LanguageService} from '../../Services/language.service'
import {Subscription} from 'rxjs/Subscription';
import {JsonLoadService } from '../../Services/jsonload.service';
import 'rxjs/add/operator/map';
import { WebPartBase } from '../../Shared/webpartbase';

@Component({
    selector: 'latestinfo',
    template: `<link href="../style/latestinfo.css" rel="stylesheet">
            <div id="ContentBoxGray">
                <h3>{{title}} ({{date}})</h3>
                <div id="BoxContent">
                 <div *ngFor="let info of currentinformation">
                    <p>{{info.title}}</p>
                    <p><a href="{{info.filepath}}">
                    <img alt="watch online" src="/images/icon/video.png" style="border:0" width="16" height="16"/> Video({{info.length}})</a>
                </div>
			</div>
    `
})
export class LatestInfoComponent extends WebPartBase {
    informations : Map<Language, VideoOfWorship[]>;
    morningfile : string;
    afternoonfile : string;
    date : string;
    public currentinformation : VideoOfWorship[];

    constructor(languageService : LanguageService,)
    {
        super(languageService);
    }

    ngOnInit()
    {
        this.titles.set(Language.English, "Latest Sunday Message");
        this.titles.set(Language.SimplifyChinese, "最新主日信息");
        this.titles.set(Language.TranditionalChinese, "最新主日信息");
        
        this.morningfile = "#";
        this.afternoonfile = "#";
        this.date = "03/018/2018";
        this.informations = new Map<Language, VideoOfWorship[]>();
        this.informations.set(Language.English, [{filepath: this.morningfile, 
                                                    title : "The King’s Calling -To be the disciple of the Lord - Brother Jonathan Pon", 
                                                    length:"1:0:20" },
                                                 {filepath: this.afternoonfile, 
                                                    title : "Heroes of Faith - Mike Wong", 
                                                    length:"0:44:15" }]);
        this.informations.set(Language.SimplifyChinese, [{filepath:this.morningfile, title : "主的呼召-作主的门徒 (1) - 彭动平弟兄", length:"1:0:20" }]);
        this.informations.set(Language.TranditionalChinese, [{filepath:this.morningfile, title : "主的呼召-作主的門徒 (1) - 彭動平弟兄", length:"1:0:20" }]);

        this.LoadData();
        
    }

    LoadData()
    {
        this.title = this.titles.get(GlobalVariable.language);
        this.currentinformation = this.informations.get(GlobalVariable.language);
        console.log(this.currentinformation[0]);
    }

    InitialData
}

class VideoOfWorship
{
    filepath : string
    title : string
    length : string
}