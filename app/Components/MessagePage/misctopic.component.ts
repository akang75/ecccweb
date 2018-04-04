import {Component} from '@angular/core';
import { Language, GlobalVariable} from '../../Shared/globalvarible';
import { WebPartBase } from '../../Shared/webpartbase';
import { LanguageService } from '../../Services/language.service';

@Component({
    moduleId: module.id,
    selector: 'specialtopic',
    templateUrl: "classlist.component.html"
})
export class MisctopicComponent extends WebPartBase{
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
        this.titles.set(Language.English, "Special Topic");
        this.titles.set(Language.TranditionalChinese, "各類專題");
        this.titles.set(Language.SimplifyChinese, "各类专题");

        this.classes = new Map<Language, ClassItem[]>();
        this.classes.set(Language.English, [{title:"Gospel Meeting", routingparamenter:"Gospel", imagepath : "topic.png"},
                                            {title:"Workship sharing", routingparamenter:"workship", imagepath : "topic.png"},
                                            {title:"Summer Retreat", routingparamenter:"retreat", imagepath : "topic.png"},
                                            {title:"Sharing", routingparamenter:"sharing", imagepath : "topic.png"},
                                            {title:"Growing Kids God's Way", routingparamenter:"growkids", imagepath : "topic.png"}
                                            ]);
        this.classes.set(Language.SimplifyChinese, [{title:"福音晚會", routingparamenter:"Gospel", imagepath : "topic.png"},
                                            {title:"事工分享", routingparamenter:"basictruth",imagepath :"topic.png"},
                                            {title:"夏令会", routingparamenter:"retreat", imagepath : "topic.png"},
                                            {title:"見证分享", routingparamenter:"mathew", imagepath : "topic.png"},
                                            {title:"按照神的方式教育孩子", routingparamenter:"growkids", imagepath : "topic.png"}
                                            ]);
        this.classes.set(Language.TranditionalChinese, [{title:"福音晚会", routingparamenter:"Gospel", imagepath : "topic.png"},
                                            {title:"事工分享", routingparamenter:"basictruth",imagepath :"topic.png"},
                                            {title:"夏令會", routingparamenter:"retreat", imagepath : "topic.png"},
                                            {title:"见證分享", routingparamenter:"mathew", imagepath : "topic.png"},
                                            {title:"按照神的方式教育孩子", routingparamenter:"growkids", imagepath : "topic.png"}
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