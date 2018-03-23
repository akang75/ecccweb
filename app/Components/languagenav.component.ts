import {Component} from '@angular/core';
import {Language} from '../Shared/globalvarible';
import {GlobalVariable} from '../Shared/globalvarible';
import {LanguageService} from '../Services/language.service'

@Component({
    selector: 'langaguenav',
    template: `<link href="../style/maincss.css" rel="stylesheet">
        <div id="languagetable">
            <ul id="horizontal-language-list">
                <li *ngFor="let lang of languages" (click)="setLanguage(lang.language)">
                    <a [hidden]=lang.hidden>{{lang.displaytext}}</a>
                </li>
            </ul>
        </div>`
})

export class LanguageNavComponent{
    public languages : LanguageTab[]

    constructor(private languageService : LanguageService)
    {
        this.languages = [{language : Language.English, 
                            hidden : false,
                            displaytext: "English"},
                          {language : Language.SimplifyChinese, 
                            hidden : false,
                            displaytext: "简体中文"},
                          {language : Language.TranditionalChinese, 
                            hidden : true,
                            displaytext: "繁體中文"}];
        
        GlobalVariable.language = Language.TranditionalChinese;

    }
    setLanguage(language:Language)
    {
        GlobalVariable.language = language; 
        
        for(let lan of this.languages)
        {
            lan.hidden = false;
            if(Language[lan.language] === Language[language])
            {
                lan.hidden = true;
                this.languageService.changeLanguage(Language[language]);
            }
        }
        
    } 
}

class LanguageTab{
    public language:Language;
    public hidden:boolean;
    public displaytext:string;
}