import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Pavimento } from './pavimento.model';

import { AashtoFlexibleService } from './aashto-flexible.service';

@Component({
    moduleId: module.id,
    selector: 'usecase-one-main-component',
    templateUrl: './main.component.html',
    providers: [
        FormBuilder,
        AashtoFlexibleService,
    ]
})

export class MainComponent implements OnInit {

    myForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private aashtoFlexibleService: AashtoFlexibleService,
    ){ }

    ngOnInit() {
        this.myForm = this._fb.group({
            ejesequiv: ['', [Validators.required, CustomValidators.range([0, 10000000])]],
            confiabdiseno: ['', [Validators.required]],
            errestandar: ['', [Validators.required, CustomValidators.range([0, 1])]],
            modresili: ['', [Validators.required, CustomValidators.range([0, 1])]],
            /*
            details: ['', [Validators.minLength(5), Validators.maxLength(10)]],
            kind: ['', [Validators.required]],
            start_date: ['', [Validators.pattern('^(20[1-9][0-9])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$')]],
            end_date: ['', [Validators.pattern('^(20[1-9][0-9])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$')]]
            */
        });
    }

    calcular(myForm: FormGroup) {
        console.log('calcular()');
        let pavimento: Pavimento = {
            ejesequiv: myForm.value.ejesequiv,
            confiabdiseno: myForm.value.confiabdiseno,
            errestandar: myForm.value.errestandar,
            modresili: myForm.value.modresili,
            servicini: myForm.value.servicini,
            servicfin: myForm.value.servicfin,
            numestruc: myForm.value.numestruc,
        };

        console.log('Pavimento: ' + JSON.stringify(pavimento));  

        let response = this.aashtoFlexibleService.calcular(pavimento);

        console.log(JSON.stringify(response));
        this.myForm.reset();
    }

    getConfiabDisenoOptions() {
        console.log('getConfiabDisenoOptions()');

        return this.aashtoFlexibleService.confiabDisenoOptions();
    }

}

/*
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Agreement } from './agreement.model';
import {AgreementApiService} from './agreement.service' 

@Component({
    moduleId: module.id,
    selector: 'usecase-one-main-component',
    templateUrl: './main.component.html',
    providers:[AgreementApiService]
})

export class MainComponent implements OnInit {
    agreements: Agreement[];
    selected_agreement: Agreement;

    constructor(
        private service: AgreementApiService,
        private router: Router,
    ){  }

    getAgreements(){
        this.service
        .getAgreements()
        .then(agreements => this.agreements = agreements);
    }

    ngOnInit(){
        this.getAgreements();
    }

    onSelect(agreement: Agreement): void {
        this.selected_agreement = agreement;
        this.router.navigate([
            '/dashboard/module-one-usecase1/detail',
            this.selected_agreement.id]
        );
    }

}
*/