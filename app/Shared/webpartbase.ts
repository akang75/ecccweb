import {Language} from './globalvarible';
import {Subscription} from 'rxjs/Subscription';
import {LanguageService} from '../Services/language.service'

export class WebPartBase
{
    title : string;
    titles : Map<Language, string>;
    subscription: Subscription;

    constructor(private languageService : LanguageService)
    {
        this.titles = new Map<Language, string>();
        this.subscription = languageService.currentLanguage$.subscribe(
            language => {
                this.LoadData();
        });
    }

    LoadData()
    {

    }
}