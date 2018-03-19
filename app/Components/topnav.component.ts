import {Component} from '@angular/core';
import {GlobalVariable} from '../Shared/globalvarible';
import {Language} from '../Shared/globalvarible';
import {LanguageService} from '../Services/language.service'
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'topmenu',
    template: `<link href="../style/maincss.css" rel="stylesheet">
           <ul id="horizontal-list">
                <nav>
                    <li *ngFor="let item of currentItems.items">
                       <a routerLinkActive="active" routerLink="{{item.routerLink}}">{{item.title}}</a>
                    </li>
                </nav>
            </ul>
      
    <router-outlet></router-outlet>`
})
export class TopNavComponent{
    menuitems : Map<Language, MenuItems>
    currentItems : MenuItems
    subscription: Subscription;

    constructor(private languageService : LanguageService)
    {
        GlobalVariable.language
        this.menuitems = new Map<Language, MenuItems>();
        this.menuitems.set(Language.English, {items : [{title:'Home', routerLink:'Login'},
                                                       {title:'About Us',routerLink:'Welcome'},
                                                       {title:'Worship',routerLink:'Default'}]});
        this.menuitems.set(Language.SimplifyChinese, {items : [{title:'主页', routerLink:'Login'},
                                                       {title:'简介',routerLink:'Welcome'},
                                                       {title:'崇拜',routerLink:'Default'}]});
        this.menuitems.set(Language.TranditionalChinese, {items : [{title:'主頁', routerLink:'Login'},
                                                       {title:'簡介',routerLink:'Welcome'},
                                                       {title:'崇拜',routerLink:'Default'}]});
        this.SetCurrentItemByLanguage(Language[GlobalVariable.language]);

        this.subscription = languageService.currentLanguage$.subscribe(
            language => {
                this.SetCurrentItemByLanguage(language);
        });

    }

    SetCurrentItemByLanguage(language:string)
    {
        this.currentItems =  this.menuitems.get(Language[language]);
    }

}

class MenuItems{
    items :MenuItem[]
}

class MenuItem{
    title:string;
    routerLink:string;
}