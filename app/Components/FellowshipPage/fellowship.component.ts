import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable, ImageIcon} from '../../Shared/globalvarible';

@Component({
    moduleId: module.id,
    selector: 'fellowship',
    templateUrl: "fellowship.component.html",
})
export class FellowshipComponent extends WebPartBase{

    Baptisms : ImageIcon[];

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        this.Baptisms = [new ImageIcon("/images/Event/080712_Street_fair_TN.jpg", "2008/07/12", "http://sdrv.ms/QglqqE", ""),
                        new ImageIcon("/images/Event/100710_Street_fair_TN.jpg", "2010/07/10", "http://sdrv.ms/QglmqE", ""),
                        new ImageIcon("/images/Event/1107090_Street_fair_TN.jpg", "2011/07/09", "http://sdrv.ms/QglkPz", ""),
                        new ImageIcon("/images/Event/120714_street_fair_TN.jpg", "2012/07/14", "http://sdrv.ms/QgliY2", "")
                        ];
    }
}