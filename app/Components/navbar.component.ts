import { Component } from '@angular/core';
import {Language} from '../Shared/globalvarible';
import {GlobalVariable} from '../Shared/globalvarible';
import {LanguageService} from '../Services/language.service'

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
    public languages : LanguageTab[]

    constructor(private languageService : LanguageService)
    {
    }

    ngOnInit()
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
        

    }
    
    setLanguage(language:string)
    {
        GlobalVariable.language = Language[language]; 
        this.languageService.changeLanguage(language);
    } 
}

class LanguageTab{
    public language:Language;
    public hidden:boolean;
    public displaytext:string;
}