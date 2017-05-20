import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Logger } from "angular2-logger/core";
import *  as Config from '../config';

@Injectable()
export class LoggerService extends Logger {
    constructor() {
        super();
        switch (Config.data.LogLevel) {
            case "OFF":
                this.level = this.Level.OFF;
                break;
            case "ERROR":
                this.level = this.Level.ERROR;
                break;
            case "WARN":
                this.level = this.Level.WARN;
                break;
            case "INFO":
                this.level = this.Level.INFO;
                break;
            case "DEBUG":
                this.level = this.Level.DEBUG;
                break;
            default:
                this.level = this.Level.LOG;
        }        
        console.log("Log level is ", Config.data.LogLevel);
    }
}