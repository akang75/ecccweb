export enum Language{
    English,
    TranditionalChinese,
    SimplifyChinese
}

export class GlobalVariable{
    static language : Language
}

export interface IVerseItem{
    text:string;
    from:string;
    version:string;  
}