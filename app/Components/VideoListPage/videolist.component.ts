import {Component} from '@angular/core';
import { WebPartBase } from '../../Shared/webpartbase';
import {LanguageService} from '../../Services/language.service'
import {Language, GlobalVariable} from '../../Shared/globalvarible';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'videolist',
    template: 'Coming soon for {{source}} {{language}}',
})
export class VideoListComponent extends WebPartBase{
    source:string
    language:string
    paramsSub: any
    constructor(languageService : LanguageService, private activatedRoute: ActivatedRoute)
    {
        super(languageService);
        
    }

    ngOnInit()
    {

        this.paramsSub = this.activatedRoute.queryParams.subscribe(params => {
            this.source = params['source'];
         });
         this.LoadData();
    }

    LoadData()
    {
       this.language = Language[GlobalVariable.language];
    }


}