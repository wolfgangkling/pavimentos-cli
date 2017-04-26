import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { MessageService } from '../../messaging/message.service';
import { Pavimento, CapaDiseno, InfoReferencia } from './pavimento.model';

import { AashtoFlexibleService } from './sn-flexible.service';
import { Logger } from 'angular2-logger/core';
import { roundDecimal } from '../../utils/math.util';

export class InformeModalContext extends BSModalContext {
}

@Component({
    moduleId: module.id,
    selector: 'modal-content',
    templateUrl: './informe.modal.html',
})
export class InformeModal implements CloseGuard, ModalComponent<InformeModalContext>, OnInit {

    context: InformeModalContext;
    myForm: FormGroup;
    validationMessages: { [key: string]: { [key: string]: string } } = {};
    errorMessages: { [key: string]: string } = {};

    constructor(
        public dialog: DialogRef<InformeModalContext>,
        private messageService: MessageService,
        private aashtoFlexibleService: AashtoFlexibleService,
        private formBuilder: FormBuilder,
        private logger: Logger,
    ) {
        this.context = dialog.context;
    }

    ngOnInit() {
        //Initialize form controls
        this.myForm = this.formBuilder.group({
            proyecto: ['', [Validators.required]],
            via: ['', [Validators.required]],
            localizacion: ['', [Validators.required]],
            cliente: ['',],
            ingenieroDiseno: ['', [Validators.required]],
        });

        //Set all validation messages
        this.validationMessages = {
            'proyecto': {
                'required': 'Debe ingresar un nombre de proyecto',
            },
            'via': {
                'required': 'Debe ingresar un nombre de vía',
            },
            'localizacion': {
                'required': 'Debe ingresar una localización',
            },
            'cliente': {
                'required': 'Debe ingresar el nombre del cliente',
            },
            'ingenieroDiseno': {
                'required': 'Debe ingresar el nombre de quien elabora el diseño',
            },
        }

        if (this.aashtoFlexibleService.infoReferencia != undefined) {
            let infoReferencia: InfoReferencia = this.aashtoFlexibleService.infoReferencia;
            this.myForm.controls['proyecto'].setValue(infoReferencia.proyecto);
            this.myForm.controls['via'].setValue(infoReferencia.via);
            this.myForm.controls['localizacion'].setValue(infoReferencia.localizacion);
            this.myForm.controls['cliente'].setValue(infoReferencia.cliente);
            this.myForm.controls['ingenieroDiseno'].setValue(infoReferencia.ingenieroDiseno);
        }
    }

    okModal() {

        this.setErrorMessagesToForm();
        this.myForm.markAsDirty();

        if (this.myForm.valid) {
            let infoReferencia: InfoReferencia = {
                proyecto: this.myForm.value.proyecto,
                via: this.myForm.value.via,
                localizacion: this.myForm.value.localizacion,   
                cliente: this.myForm.value.cliente,
                ingenieroDiseno: this.myForm.value.ingenieroDiseno,
            }
            this.aashtoFlexibleService.infoReferencia = infoReferencia;
            this.logger.debug('Se agregó información de referencia');
            this.messageService.sendEventObject('info_referencia', '');
            this.dialog.close();
        }
    }

    cancelModal() {
        this.dialog.close();
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

}
