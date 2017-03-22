import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
    validationMessages: { [key: string]: { [key: string]: string } } = {};
    errorMessages: { [key: string]: string } = {};

    confiabDisenoOptions: string[];
    numestruc: Number = 0;

    constructor(
        private _fb: FormBuilder,
        private aashtoFlexibleService: AashtoFlexibleService,
    ) { }

    ngOnInit() {
        //Initialize form controls
        this.myForm = this._fb.group({
            ejesequiv: ['', [Validators.required, CustomValidators.range([0, 10000000])]],
            confiabdiseno: ['', [Validators.required]],
            errestandar: ['', [Validators.required, CustomValidators.range([0, 1])]],
            modresili: ['', [Validators.required, CustomValidators.gt(0)]],
            servicini: ['', [Validators.required, CustomValidators.range([0, 5])]],
            servicfin: ['', [Validators.required, CustomValidators.range([0, 5])]],
            numestruc: [''],
        });

        //Set all validation messages
        this.validationMessages = {
            'ejesequiv': {
                'required': 'Debe ingresar el N', 
                'range': 'El N deben ser un valor numérico > 0 y < 10.000.000',
            },
            'confiabdiseno': {
                'required': 'Es necesario seleccionar un R', 
            },
            'errestandar': {
                'required': 'Debe ingresar el So', 
                'range': 'El So debe ser un valor numérico > 0 y < 1',
            },            
            'modresili': {
                'required': 'Debe ingresar el Mr', 
                'gt': 'El Mr debe ser un valor numérico > 0',
            },            
            'servicini': {
                'required': 'Debe ingresar el Po', 
                'range': 'El Po debe ser un valor numérico > 0 y < 5',
            }, 
            'servicfin': {
                'required': 'Debe ingresar el Pt', 
                'range': 'El Pt debe ser un valor numérico > 0 y < 5',
            }, 
            'numestruc': {
                'invalid': 'Los valores ingresados no son validos y no arrojaron ningun resultado', 
            },            
        }

        //Listens to form to set correct error messages when any field changes
        this.myForm.valueChanges.subscribe(data => this.setErrorMessagesToForm());

        this.confiabDisenoOptions = this.getConfiabDisenoOptions();

        //Delete .. just for testing purposes
        let pavimento: Pavimento = {
            ejesequiv: 7950000,
            confiabdiseno: '95.00',
            errestandar: 0.49,
            modresili: 90,
            servicini: 4.5,
            servicfin: 2.8,
            numestruc: null,
        }

        this.myForm.controls['ejesequiv'].setValue(pavimento.ejesequiv);
        this.myForm.controls['confiabdiseno'].setValue(pavimento.confiabdiseno);
        this.myForm.controls['errestandar'].setValue(pavimento.errestandar);
        this.myForm.controls['modresili'].setValue(pavimento.modresili);
        this.myForm.controls['servicini'].setValue(pavimento.servicini);
        this.myForm.controls['servicfin'].setValue(pavimento.servicfin);
        this.myForm.controls['numestruc'].setValue(pavimento.numestruc);

        this.calcular(this.myForm);
        //END Delete .. just for testing purposes
    }

    //Sets the correct error message to the this.errorMessages['fieldName'] 
    setErrorMessagesToForm() {

        for (var field in this.validationMessages) {

            const control = this.myForm.get(field);
            if (!control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.errorMessages[field] = messages[key] + ' ';
                }
            }
        }

    }

    onChangeAnyField() {
        //Set numestruc control to no errors
        this.myForm.controls['numestruc'].setErrors(null, true);
        this.calcular(this.myForm);
        if(this.myForm.value.numestruc == null){
            console.log('this.myForm.value.numestruc == null');
            //Raise error to numestruc control
            this.myForm.controls['numestruc'].setErrors({invalid: 'invalid'}, true);
            this.setErrorMessagesToForm();    
        }
    }

    //This function is necessary as workaround because (change) does not 
    //updates myForm in select controls (bug)
    onChangeConfiabilidadDiseno(newValue: any) {

        console.log('onChangeConfiabilidadDiseno(..)');
        if (newValue != '') {
            let pavimento = this.formToPavimento(this.myForm);
            pavimento.confiabdiseno = newValue;
            console.log('Pavimento frm: ' + JSON.stringify(pavimento));

            this.aashtoFlexibleService.calcular(pavimento).subscribe(data => pavimento = data);

            this.myForm.controls['numestruc'].setValue(pavimento.numestruc);
            console.log('Pavimento res: ' + JSON.stringify(pavimento));
        }
        else {
            console.log('Form not valid');
        }
    }

    calcular(myForm: FormGroup) {
        console.log('calcular()');

        if (myForm.valid) {

            let pavimento = this.formToPavimento(myForm);
            console.log('Pavimento frm: ' + JSON.stringify(pavimento));

            this.aashtoFlexibleService.calcular(pavimento).subscribe(data => pavimento = data);

            this.myForm.controls['numestruc'].setValue(pavimento.numestruc);
            console.log('Pavimento res: ' + JSON.stringify(pavimento));
        }
        else {
            console.log('Form not valid');
        }
    }

    private formToPavimento(myForm: FormGroup): Pavimento {
        console.log('formToPavimento(...)');
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

    private getConfiabDisenoOptions() {
        console.log('getConfiabDisenoOptions()');
        return this.aashtoFlexibleService.confiabDisenoOptions();
    }

}