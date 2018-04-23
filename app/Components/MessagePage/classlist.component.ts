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
        var iconimage = "book.png";
        this.classes = new Map<Language, ClassItem[]>();
        this.classes.set(Language.English, [{title:"Basic Truth", routingparamenter:"basic_truth", imagepath : iconimage}
                                          //  {title:"Spirital experience", routingparamenter:"spirital", imagepath : iconimage},
                                          //  {title:"Book of Mathew", routingparamenter:"matthew", imagepath : iconimage}
                                            ]);
        this.classes.set(Language.SimplifyChinese, [{title:"基要真理", routingparamenter:"basic_truth",imagepath :iconimage},
                                            // {title:"基督徒的属灵经历", routingparamenter:"spirital", imagepath : iconimage},
                                             {title:"马太福音", routingparamenter:"matthew", imagepath : iconimage},
                                            // {title:"创世纪", routingparamenter:"Genesis", imagepath : iconimage},
                                            // {title:"预言中的基督", routingparamenter:"Christ_in_Prophesy", imagepath : iconimage},
                                            // {title:"天上的异象", routingparamenter:"Heavenly_Vision", imagepath : iconimage},
                                             {title:"神作工的原则", routingparamenter:"Principle_of_God's_Work", imagepath : iconimage},
                                             {title:"祭司的国度", routingparamenter:"The_Kingdom_of_Priests", imagepath : iconimage}
                                            ]);
        this.classes.set(Language.TranditionalChinese, [{title:"基要真理", routingparamenter:"basic_truth",imagepath :iconimage},
                                            // {title:"基督徒的屬靈經歷", routingparamenter:"spirital", imagepath : iconimage},
                                             {title:"馬太福音", routingparamenter:"matthew", imagepath : iconimage},
                                            // {title:"創世紀", routingparamenter:"Genesis", imagepath : iconimage},
                                            // {title:"預言中的基督", routingparamenter:"Christ_in_Prophesy", imagepath : iconimage},
                                            // {title:"天上的異象", routingparamenter:"Heavenly_Vision", imagepath : iconimage},
                                             {title:"神作工的原則", routingparamenter:"Principle_of_God's_Work", imagepath : iconimage},
                                             {title:"祭司的國度", routingparamenter:"The_Kingdom_of_Priests", imagepath : iconimage}
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