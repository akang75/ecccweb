import {Language} from './globalvarible';

export class WebPartBase
{
    title : string;
    titles : Map<Language, string>;

    constructor()
    {
        this.titles = new Map<Language, string>();
    }
}