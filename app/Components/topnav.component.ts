import {Component} from '@angular/core';
import {GlobalVariable, Language} from '../Shared/globalvarible';
import {LanguageService} from '../Services/language.service'
import {Subscription} from 'rxjs/Subscription';
import { WebPartBase } from '../Shared/webpartbase';

@Component({
    selector: 'topmenu',
    template: `<div class="sidebar-wrapper">
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
                                                       {title:'Meeting',routerLink:'Meeting', icon:"pe-7s-home"},
                                                       {title:'Message', routerLink:'Message', icon:"pe-7s-sun"},
                                                       {title:'About Us',routerLink:'Welcome', icon:"pe-7s-home"},
                                                       {title:'Worship',routerLink:'Default', icon:"pe-7s-home"}]});
        this.menuitems.set(Language.SimplifyChinese, {items : [{title:'主页', routerLink:'Home', icon:"pe-7s-home"},
                                                       {title:'聚会',routerLink:'Meeting', icon:"pe-7s-home"},
                                                       {title:'主日信息', routerLink:'Message', icon:"pe-7s-home"},
                                                       {title:'简介',routerLink:'Welcome', icon:"pe-7s-home"},
                                                       {title:'崇拜',routerLink:'Default', icon:"pe-7s-home"}]});
        this.menuitems.set(Language.TranditionalChinese, {items : [{title:'主頁', routerLink:'Home', icon:"pe-7s-home"},
                                                       {title:'聚會',routerLink:'Meeting', icon:"pe-7s-home"},
                                                       {title:'主日信息', routerLink:'Message', icon:"pe-7s-home"},
                                                       {title:'簡介',routerLink:'Welcome', icon:"pe-7s-home"},
                                                       {title:'崇拜',routerLink:'Default', icon:"pe-7s-home"}]});
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