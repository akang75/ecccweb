import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable} from '../../Shared/globalvarible';

@Component({
    moduleId: module.id,
    selector: 'godword',
    template: "placeholder",
})
export class GodWordComponent extends WebPartBase{

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        
    }
}