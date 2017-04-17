import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { MessageService } from '../../messaging/message.service';
import { Pavimento, CapaDiseno } from './pavimento.model';

import { AashtoFlexibleService } from './sn-flexible.service';
import { Logger } from 'angular2-logger/core';
import { roundDecimal } from '../../utils/math.util';

export class CapaModalContext extends BSModalContext {
}

@Component({
    moduleId: module.id,
    selector: 'modal-content',
    templateUrl: './capa.modal.html',
})
export class CapaModal implements CloseGuard, ModalComponent<CapaModalContext>, OnInit {

    context: CapaModalContext;
    tipoMaterialOptions: string[];
    myForm: FormGroup;
    validationMessages: { [key: string]: { [key: string]: string } } = {};
    errorMessages: { [key: string]: string } = {};

    constructor(
        public dialog: DialogRef<CapaModalContext>,
        private messageService: MessageService,
        private aashtoFlexibleService: AashtoFlexibleService,
        private formBuilder: FormBuilder,
        private logger: Logger,
    ) {
        this.context = dialog.context;
        this.tipoMaterialOptions = this.aashtoFlexibleService.tipoMaterialOptions();
    }

    ngOnInit() {
        //Initialize form controls
        this.myForm = this.formBuilder.group({
            tipomaterial: ['', [Validators.required]],
            nombre: ['', [Validators.required]],
            coefaporte: ['', [Validators.required]],
            coefdrenaje: ['', [Validators.required]],
            espesor: ['', [Validators.required]],
        });

        if (this.aashtoFlexibleService.capaDiseno != undefined) {
            let capaDiseno: CapaDiseno = this.aashtoFlexibleService.capaDiseno;
            this.myForm.controls['tipomaterial'].setValue(capaDiseno.tipoMaterial);
            this.myForm.controls['nombre'].setValue(capaDiseno.nombre);
            this.myForm.controls['coefaporte'].setValue(capaDiseno.coeficienteAporte);
            this.myForm.controls['coefdrenaje'].setValue(capaDiseno.coeficienteDrenaje);
            this.myForm.controls['espesor'].setValue(capaDiseno.espesor);
        }
    }

    okModal() {
        let capaDiseno: CapaDiseno = {
            id: undefined,
            tipoMaterial: this.myForm.value.tipomaterial,
            nombre: this.myForm.value.nombre,
            coeficienteAporte: this.myForm.value.coefaporte,
            coeficienteDrenaje: this.myForm.value.coefdrenaje,
            espesor: this.myForm.value.espesor,
            aporteAlsn: undefined,
        };
        capaDiseno.aporteAlsn = roundDecimal(capaDiseno.espesor / 2.54 *
            capaDiseno.coeficienteDrenaje * capaDiseno.coeficienteAporte, 2);

        //Agregando una nueva capa
        if (this.aashtoFlexibleService.capaDiseno == undefined) {
            this.logger.debug('Aporte al SN: ' + capaDiseno.aporteAlsn);
            this.messageService.sendEventObject('nueva_capa_diseno', capaDiseno);
        }
        else { //Modificando capa existente
            capaDiseno.id = this.aashtoFlexibleService.capaDiseno.id;
            this.messageService.sendEventObject('edit_capa_diseno', capaDiseno);
        }
        
        this.dialog.close();

    }

    cancelModal() {
        this.dialog.close();
    }
}
