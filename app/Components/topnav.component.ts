import {Component} from '@angular/core';
import {GlobalVariable, Language} from '../Shared/globalvarible';
import {LanguageService} from '../Services/language.service'
import {Subscription} from 'rxjs/Subscription';
import { WebPartBase } from '../Shared/webpartbase';

@Component({
    selector: 'topmenu',
    template: `<div class="sidebar-wrapper">
            <div class="logo">
                <a href="http://www.eccc.net:81" class="simple-text">
                        Welcome to ECCC!
                </a>
            </div>
           <ul class="nav responsive-nav">
                <li routerLinkActive="active" *ngFor="let menuItem of currentItems.items">
                    <a  [routerLink]="[menuItem.routerLink]">
                    <i class="{{menuItem.icon}}"></i>
                    <p>{{menuItem.title}}</p>
                    </a>
                </li>
            </ul>
            </div>
      
    `
})
export class TopNavComponent extends WebPartBase{
    menuitems : Map<Language, MenuItems>;
    currentItems : MenuItems;
    subscription: Subscription;

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        this.menuitems = new Map<Language, MenuItems>();
        this.menuitems.set(Language.English, {items : [{title:'Home', routerLink:'Home', icon:"pe-7s-home"},
                                                       {title:'Meeting',routerLink:'Meeting', icon:"pe-7s-date"},
                                                        {title:'Church Message', routerLink:'ChurchMessage', icon:"pe-7s-pin"},
                                                       {title:'Videos',routerLink:'Message', icon:"pe-7s-film"},
                                                       {title:'Gospel',routerLink:'Gospel', icon:"pe-7s-speaker"},
                                                       {title:'Fellowship',routerLink:'Fellowship', icon:"pe-7s-users"},
                                                       {title:'About Us',routerLink:'About', icon:"pe-7s-info"}]});
                                                       
        this.menuitems.set(Language.SimplifyChinese, {items : [{title:'主页', routerLink:'Home', icon:"pe-7s-home"},
                                                       {title:'聚会',routerLink:'Meeting', icon:"pe-7s-date"},
                                                       {title:'教會信息', routerLink:'ChurchMessage', icon:"pe-7s-pin"},
                                                       {title:'视频资料',routerLink:'Message', icon:"pe-7s-film"},
                                                       {title:'福音',routerLink:'Gospel', icon:"pe-7s-speaker"},
                                                       {title:'肢体生活',routerLink:'Fellowship', icon:"pe-7s-users"},
                                                       {title:'简介',routerLink:'About', icon:"pe-7s-info"}]});

        this.menuitems.set(Language.TranditionalChinese, {items : [{title:'主頁', routerLink:'Home', icon:"pe-7s-home"},
                                                       {title:'聚會',routerLink:'Meeting', icon:"pe-7s-date"},
                                                       {title:'教會信息', routerLink:'ChurchMessage', icon:"pe-7s-pin"},
                                                       {title:'視頻資料',routerLink:'Message', icon:"pe-7s-film"},
                                                       {title:'福音',routerLink:'Gospel', icon:"pe-7s-speaker"},
                                                       {title:'肢體生活',routerLink:'Fellowship', icon:"pe-7s-users"},
                                                       {title:'簡介',routerLink:'About', icon:"pe-7s-info"}]});
        this.LoadData()
    }

    LoadData()
    {
        this.currentItems =  this.menuitems.get(GlobalVariable.language);
    }

}

class MenuItems{
    items :MenuItem[]
}

class MenuItem{
    title:string;
    routerLink:string;
    icon:string;
}