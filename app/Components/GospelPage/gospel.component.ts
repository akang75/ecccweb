import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable, VideoOfWorship, ImageIcon} from '../../Shared/globalvarible';

@Component({
    moduleId: module.id,
    selector: 'gospel',
    templateUrl: "gospel.component.html",
})
export class GospelComponent extends WebPartBase{
    iconfilename: string;
    messagetitles : Map<Language, string>;
    currentmessagetitle:string;

    historytitles : Map<Language, string>;
    currenthistorytitle:string;

    informations : Map<Language, VideoOfWorship>;
    currentinformation : VideoOfWorship;

    gospelpictures : ImageIcon[];

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        this.messagetitles = new Map<Language, string>();
        this.messagetitles.set(Language.English, "The Latest Gospel Message");
        this.messagetitles.set(Language.SimplifyChinese, "最新福音信息(2/24/18)");
        this.messagetitles.set(Language.TranditionalChinese, "最新福音信息(2/24/18)");

        this.historytitles = new Map<Language, string>();
        this.historytitles.set(Language.English, "Archived Messages");
        this.historytitles.set(Language.SimplifyChinese, "其它福音信息");
        this.historytitles.set(Language.TranditionalChinese, "其它福音信息");

        this.informations = new Map<Language, VideoOfWorship>();
        this.informations.set(Language.English, {videofilepath: `Videos/English_Worship/18/${GlobalVariable.englishgospelfilename}.mp4`,
                                                    auidofilepath : `Videos/English_Worship/18/${GlobalVariable.englishgospelfilename}.mp3`,
                                                    title : GlobalVariable.gospeltitleen, 
                                                    length:"1:0:20" ,
                                                    speaker: GlobalVariable.gospelspeakeren});
        this.informations.set(Language.SimplifyChinese, {videofilepath: `Videos/English_Worship/18/${GlobalVariable.gospelfilename}.mp4`,
                                                        auidofilepath : `Videos/English_Worship/18/${GlobalVariable.gospelfilename}.mp3`,
                                                        title : GlobalVariable.gospeltitlesi, 
                                                        length:"1:0:20" ,
                                                        speaker: GlobalVariable.speakersi});
        this.informations.set(Language.TranditionalChinese, {videofilepath: `Videos/English_Worship/18/${GlobalVariable.gospelfilename}.mp4`,
                                                        auidofilepath : `Videos/English_Worship/18/${GlobalVariable.gospelfilename}.mp3`,
                                                        title : GlobalVariable.gospelspeakertr, 
                                                        length:"1:0:20" ,
                                                        speaker: GlobalVariable.speakertr});

        this.gospelpictures = [new ImageIcon("/images/Event/080712_Street_fair_TN.jpg", "2008/07/12", "http://sdrv.ms/QglqqE", ""),
                               new ImageIcon("/images/Event/100710_Street_fair_TN.jpg", "2010/07/10", "http://sdrv.ms/QglmqE", ""),
                               new ImageIcon("/images/Event/1107090_Street_fair_TN.jpg", "2011/07/09", "http://sdrv.ms/QglkPz", ""),
                               new ImageIcon("/images/Event/120714_street_fair_TN.jpg", "2012/07/14", "http://sdrv.ms/QgliY2", "")
                            ];
        
        this.iconfilename = "expand.png";

        this.LoadData();
    }

    LoadData()
    {
        this.currentmessagetitle = this.messagetitles.get(GlobalVariable.language);
        this.currenthistorytitle = this.historytitles.get(GlobalVariable.language);
        this.currentinformation = this.informations.get(GlobalVariable.language);
    }


}