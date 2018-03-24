import {Language, GlobalVariable} from './globalvarible';
import {Subscription} from 'rxjs/Subscription';
import {LanguageService} from '../Services/language.service'
import { OnInit } from '@angular/core';

export class WebPartBase implements OnInit
{
    title : string;
    titles : Map<Language, string>;
    subscription: Subscription;
    isenglish : boolean;
    issimplifychinese : boolean;
    istraditionalchinese:boolean;

    constructor(private languageService : LanguageService)
    {
        this.titles = new Map<Language, string>();
        this.subscription = this.languageService.currentLanguage$.subscribe(
            language => {
                this.LoadData();
                this.isenglish = GlobalVariable.language == Language.English;
                this.issimplifychinese = GlobalVariable.language == Language.SimplifyChinese;
                this.istraditionalchinese = GlobalVariable.language == Language.TranditionalChinese;
        });
        this.isenglish = GlobalVariable.language == Language.English;
        this.issimplifychinese = GlobalVariable.language == Language.SimplifyChinese;
        this.istraditionalchinese = GlobalVariable.language == Language.TranditionalChinese;
    }

    ngOnInit()
    {
        
    }

    LoadData()
    {

    }
}