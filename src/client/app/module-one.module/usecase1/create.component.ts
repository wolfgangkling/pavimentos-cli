import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import {AgreementApiService} from './agreement.service' 

@Component({
    moduleId: module.id,
    selector: 'usecase-one-main-component',
    templateUrl: './main.component.html',
    providers:[FormBuilder, AgreementApiService]
})

export class MainComponent implements OnInit {

    kinds = ['Basico', 'Medio', 'Avanzado'];
    myForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private service: AgreementApiService,
    ){  }

    ngOnInit(){
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            details: ['', [Validators.minLength(5), Validators.maxLength(10)]],
            kind: ['', [Validators.required]],
            start_date: ['', [Validators.pattern('^(20[1-9][0-9])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$')]],
            end_date: ['', [Validators.pattern('^(20[1-9][0-9])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$')]]
        });
    }

    save(model: any){
        let response = this.service.create({
            name: this.myForm.value.name,
            kind: this.myForm.value.kind,
            start_date: this.myForm.value.start_date,
            end_date: this.myForm.value.end_date,
            details: this.myForm.value.details
        });
        console.log(response)
        this.myForm.reset()
    }
}