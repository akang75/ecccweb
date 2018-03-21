import {Component} from '@angular/core';
import {GlobalVariable} from '../../Shared/globalvarible';
import {Language} from '../../Shared/globalvarible';
import {LanguageService} from '../../Services/language.service'
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'home',
    template: `<link href="../style/maincss.css" rel="stylesheet">
            
           <goldenverse></goldenverse>
    `
})
export class HomeComponent{

}