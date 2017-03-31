import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class MessageService {
    private subject = new Subject<any>();
 
    sendEventObject<T>(eventObject: T) {
        this.subject.next(eventObject);
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getEventObject<T>(): Observable<T> {
        return this.subject.asObservable();
    }
}