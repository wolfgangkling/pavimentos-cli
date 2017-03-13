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
    confiabDisenoOptions: string[];

    constructor(
        private _fb: FormBuilder,
        private aashtoFlexibleService: AashtoFlexibleService,
    ){ }

    ngOnInit() {
        this.myForm = this._fb.group({
            ejesequiv: ['', [Validators.required, CustomValidators.range([0, 10000000])]],
            confiabdiseno: ['', [Validators.required]],
            errestandar: ['', [Validators.required, CustomValidators.range([0, 1])]],
            modresili: ['', [Validators.required, CustomValidators.range([0, 1000])]],
            servicini: ['', [Validators.required, CustomValidators.range([0, 5])]],
            servicfin: ['', [Validators.required, CustomValidators.range([0, 5])]],
            numestruc: ['', [Validators.required, CustomValidators.min(0)]],
        });
        this.confiabDisenoOptions = this.getConfiabDisenoOptions();
    }

    calcular(myForm: FormGroup) {
        console.log('calcular()');
        
        let pavimento = this.formToPavimento(myForm);
        console.log('Pavimento frm: ' + JSON.stringify(pavimento));  

        this.aashtoFlexibleService.calcular(pavimento).subscribe(data => pavimento = data);

        this.fillFormWithPavimento(pavimento);
        console.log('Pavimento res: ' + JSON.stringify(pavimento)); 
    }

    private formToPavimento(myForm: FormGroup): Pavimento {
        let pavimento: Pavimento = {
            ejesequiv: myForm.value.ejesequiv,
            confiabdiseno: myForm.value.confiabdiseno,
            errestandar: myForm.value.errestandar,
            modresili: myForm.value.modresili,
            servicini: myForm.value.servicini,
            servicfin: myForm.value.servicfin,
            numestruc: myForm.value.numestruc,
        };
        return pavimento;
    }

    private fillFormWithPavimento(pavimento: Pavimento) {
        this.myForm.controls['ejesequiv'].setValue(pavimento.ejesequiv);
        this.myForm.controls['confiabdiseno'].setValue(pavimento.confiabdiseno);
        this.myForm.controls['errestandar'].setValue(pavimento.errestandar);
        this.myForm.controls['modresili'].setValue(pavimento.modresili);
        this.myForm.controls['servicini'].setValue(pavimento.servicini);
        this.myForm.controls['servicfin'].setValue(pavimento.servicfin);
        this.myForm.controls['numestruc'].setValue(pavimento.numestruc);
    }

    private getConfiabDisenoOptions() {
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