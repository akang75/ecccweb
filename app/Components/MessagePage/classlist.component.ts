import {Component} from '@angular/core';
import { Language, GlobalVariable} from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';

@Component({
    moduleId: module.id,
    selector: 'classes',
    templateUrl: "classlist.component.html"
})
export class ClasslistComponent extends WebPartBase{
    classes : Map<Language, ClassItem[]>;
    currentclasses : ClassItem[];

    title:string;
    titles:Map<Language,string>;

    constructor(languageService : LanguageService)
    {
        super(languageService);
    }

    ngOnInit()
    {
        this.titles.set(Language.English, "Classes");
        this.titles.set(Language.SimplifyChinese, "基督学堂");
        this.titles.set(Language.TranditionalChinese, "基督學堂");

        this.classes = new Map<Language, ClassItem[]>();
        this.classes.set(Language.English, [{title:"Basic Truth", routingparamenter:"basictruth", imagepath : "book.png"},
                                            {title:"Spirital experience", routingparamenter:"spirital", imagepath : "book.png"},
                                            {title:"Book of Mathew", routingparamenter:"mathew", imagepath : "book.png"}
                                            ]);
        this.classes.set(Language.SimplifyChinese, [{title:"基要真理", routingparamenter:"basictruth",imagepath :"book.png"},
                                            {title:"基督徒的属灵经历", routingparamenter:"spirital", imagepath : "book.png"},
                                            {title:"马太福音", routingparamenter:"mathew", imagepath : "book.png"}
                                            ]);
        this.classes.set(Language.TranditionalChinese, [{title:"基要真理", routingparamenter:"basictruth",imagepath :"book.png"},
                                            {title:"基督徒的屬靈經歷", routingparamenter:"spirital", imagepath : "book.png"},
                                            {title:"馬太福音", routingparamenter:"mathew", imagepath : "book.png"}
                                            ]);
        this.LoadData();
    }

    LoadData()
    {
        this.currentclasses = this.classes.get(GlobalVariable.language);
        this.title = this.titles.get(GlobalVariable.language);
    }
}

class ClassItem
{
    title:string;
    routingparamenter:string;
    imagepath:string;
}