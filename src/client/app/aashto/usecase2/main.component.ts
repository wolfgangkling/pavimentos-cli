import { Component, OnInit } from '@angular/core';
//https://github.com/kekeh/mydatepicker#locale-attribute
import { IMyOptions, IMyDate, IMyDateModel, IMyCalendarViewChanged } from 'mydatepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoggerService } from '../../logger/logger.service';

@Component({
    moduleId: module.id,
    selector: 'usecase-two-main-component',
    templateUrl: './main.component.html',
})

export class MainComponent implements OnInit {
    valid: false;
    private myForm: FormGroup;
    private locale: string = 'es';
    private selDate: IMyDate = { year: 2002, month: 9, day: 11 };

    private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd/mm/yyyy',
        showTodayBtn: true,
    };

    private selectedTextInline: string = '';
    private border: string = 'none';


    constructor(
        private formBuilder: FormBuilder,
        private logger: LoggerService
    ) {
    }

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            myDate: [this.selDate, Validators.required]
        });
    }

    onDateChanged(event: IMyDateModel) {
        this.logger.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if (event.formatted !== '') {
            this.selectedTextInline = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';
        }
        else {
            this.selectedTextInline = '';
            this.border = 'none';
        }
    }

    onCalendarViewChanged(event: IMyCalendarViewChanged) {
        this.logger.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
    }

    onCalendarToggle(event: number): void {
        this.logger.log('onCalendarToggle(): Reason: ', event);
    }

    getClassForClassGroup() {
        if (this.valid) {
            return 'has-success';
        } else {
            return 'has-danger';
        }
    }

    getClassForInput() {
        if (this.valid) {
            return 'form-control-success';
        } else {
            return 'form-control-danger';
        }
    }
}
