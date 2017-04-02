//Angular imports
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//Angular addons imports
import { CustomValidators } from 'ng2-validation';
//Business imports
import { Pavimento } from './pavimento.model';
import { AashtoFlexibleService } from './sn-flexible.service';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { EjesEquivalentesModal, EjesEquivalentesModalContext } from './ejesequiv.modal';
import { ConfiabilidadDisenoModal, ConfiabilidadDisenoModalContext } from './confiabdiseno.modal';
import { ErrorEstandarModal, ErrorEstandarModalContext } from './errestandar.modal';
import { ModuloResilienteModal, ModuloResilienteModalContext } from './modulores.modal';

import { MessageService } from '../../messaging/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'sn-flexible',
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

    message: any;
    subscription: Subscription;

    constructor(
        private _fb: FormBuilder,
        private aashtoFlexibleService: AashtoFlexibleService,
        overlay: Overlay,
        vcRef: ViewContainerRef,
        public modal: Modal,
        private messageService: MessageService
    ) {
        overlay.defaultViewContainer = vcRef;
        this.subscription = this.messageService.getEventObject('ejesequiv').subscribe(eventObject => { this.myForm.controls['ejesequiv'].setValue(<number>eventObject)});
    }

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

        this.calcularNumeroEstructural(this.myForm);
        //END Delete .. just for testing purposes
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
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
        this.preValidations();
        this.calcularNumeroEstructural(this.myForm);
        this.posValidations();
    }

    preValidations() {
        //Set numestruc control to no errors
        this.myForm.controls['numestruc'].setErrors(null, true);
    }

    posValidations() {
        if (this.myForm.value.numestruc == null) {
            console.log('this.myForm.value.numestruc == null');
            //Raise error to numestruc control
            this.myForm.controls['numestruc'].setErrors({ invalid: 'invalid' }, true);
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

    calcularNumeroEstructural(myForm: FormGroup) {
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

    openModalEjesEquiv() {
        return this.modal.open(EjesEquivalentesModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }

    openModalConfiabDiseno() {
        return this.modal.open(ConfiabilidadDisenoModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }

    openModalErrorEstandar() {
        return this.modal.open(ErrorEstandarModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }

    openModalModuloResiliente() {
        return this.modal.open(ModuloResilienteModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }


}