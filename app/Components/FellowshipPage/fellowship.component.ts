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
        this.Baptisms = [new ImageIcon("/images/Event/Baptism071715-tn.jpg", "07/17/15", "http://1drv.ms/1fUBWLw", ""),
                        new ImageIcon("/images/Event/Baptism120514-tn.jpg", "12/5/14", "http://1drv.ms/1BpFEoe", ""),
                        new ImageIcon("/images/Event/baptism20130628_TN.jpg", "6/28/2013", "http://sdrv.ms/11RfPvc", ""),
                        new ImageIcon("/images/Event/baptism20130215_TN.jpg", "2/15/2013", "http://sdrv.ms/Y0lLip", ""),
                        new ImageIcon("/images/Event/baptism20121109_TN.jpg", "11/9/2012", "http://sdrv.ms/Q7i4Xp", "")
                        ];
    }
}