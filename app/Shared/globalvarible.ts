export enum Language{
    English,
    TranditionalChinese,
    SimplifyChinese
}

export class GlobalVariable{
    static language : Language
    static morningfile : string
    static afternoonfile : string
}

export interface IVerseItem{
    text:string;
    from:string;
    version:string;  
}