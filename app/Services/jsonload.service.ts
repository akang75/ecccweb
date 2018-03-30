import {Injectable} from '@angular/core';  
import {Http, Headers, RequestOptions, Response } from '@angular/http';  
import {Observable, Subject} from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';  
import {IVerseItem } from '../Shared/globalvarible';  
import { MessageItem } from '../Components/MessagePage/archivedmessage';

@Injectable()  
export class JsonLoadService {  
    constructor(private http: Http) {}  
    //    
    getVerseItems(jsonUrl:string): Observable < IVerseItem[] > {  
        return this.http.get(jsonUrl).map((response: Response) => {  
            return <IVerseItem[] > response.json()  
        }).catch(this.handleError);  
    }
    
    //    
    getMessageItems(jsonUrl:string): Observable < MessageItem[] > {  
        return this.http.get(jsonUrl).map((response: Response) => {  
            return <MessageItem[] > response.json()  
        }).catch(this.handleError);  
    }  
    //    
    private handleError(errorResponse: Response) {  
        console.log(errorResponse);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  
}  