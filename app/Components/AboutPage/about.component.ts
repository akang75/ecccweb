import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable} from '../../Shared/globalvarible';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: "about.component.html",
})
export class AboutComponent extends WebPartBase{

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        
    }
}