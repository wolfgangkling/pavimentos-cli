import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class MessageService {

    private observables: {[key:string]: Subject<any>} = {};

    sendEventObject<T>(eventEmitterId: string, eventObject: T) {
        if(this.observables[eventEmitterId] == null){
            this.observables[eventEmitterId] = new Subject<any>();;            
        }        
        this.observables[eventEmitterId].next(eventObject);       
    }
 
    getEventObject<T>(eventEmitterId: string): Observable<T> {
        //Se renueva el Subject cada vez para no recibir mensajes encolados.
        this.observables[eventEmitterId] = new Subject<any>();;            
        return this.observables[eventEmitterId].asObservable();
    }
}