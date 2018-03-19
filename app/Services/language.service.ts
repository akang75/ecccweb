import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Language} from '../Shared/globalvarible';

@Injectable()
export class LanguageService {
    private currentLanguageSource = new Subject<string>();
    currentLanguage$ = this.currentLanguageSource.asObservable();

    changeLanguage(language: string) {
        this.currentLanguageSource.next(language);
    }
}