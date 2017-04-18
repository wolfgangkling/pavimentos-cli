import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Logger } from 'angular2-logger/core';
import { AashtoFlexibleService } from './sn-flexible.service';
import { Pavimento, CapaDiseno } from './pavimento.model';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CapaModal, CapaModalContext } from './capa.modal';
import { MessageService } from '../../messaging/message.service';
import { Subscription } from 'rxjs/Subscription';
import { roundDecimal } from '../../utils/math.util';

@Component({
    moduleId: module.id,
    selector: 'espesores-diseno',
    templateUrl: './espesores-diseno.component.html',
    providers: [
        FormBuilder,
    ]
})

export class EspesoresDisenoComponent implements OnInit {

    myForm: FormGroup;
    subscription: Subscription;
    capasDiseno: Array<CapaDiseno> = new Array<CapaDiseno>();
    validationMessages: { [key: string]: { [key: string]: string } } = {};
    errorMessages: { [key: string]: string } = {};
    disenoCumple: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private logger: Logger,
        private aashtoFlexibleService: AashtoFlexibleService,
        overlay: Overlay,
        vcRef: ViewContainerRef,
        public modal: Modal,
        private messageService: MessageService,
    ) {
        overlay.defaultViewContainer = vcRef;
    }

    ngOnInit() {
        //Initialize form controls
        this.myForm = this.formBuilder.group({
            numestrucreq: [''],
            numestrucdis: [''],
        });
        let pavimento: Pavimento = this.aashtoFlexibleService.pavimento;
        this.myForm.controls['numestrucreq'].setValue(pavimento.numestruc);

        //Observando eventos de creación de capas
        this.subscription = this.messageService.getEventObject('nueva_capa_diseno').subscribe(eventObject => {
            let snDiseno: number = 0;
            let capaDiseno: CapaDiseno = <CapaDiseno>eventObject;
            capaDiseno.id = this.capasDiseno.length;
            this.capasDiseno.push(capaDiseno);
            this.capasDiseno.forEach(capaDiseno => snDiseno += capaDiseno.aporteAlsn);
            this.myForm.controls['numestrucdis'].setValue(roundDecimal(snDiseno, 2));
            this.verificarCumplimientoDiseno();
        });

        //Observando eventos de modificacion de capas
        this.subscription = this.messageService.getEventObject('edit_capa_diseno').subscribe(eventObject => {
            let snDiseno: number = 0;
            let capaDiseno: CapaDiseno = <CapaDiseno>eventObject;
            let capaDisenoArr: CapaDiseno = this.capasDiseno.find(elem => elem.id == capaDiseno.id);

            capaDisenoArr.tipoMaterial = capaDiseno.tipoMaterial;
            capaDisenoArr.nombre = capaDiseno.nombre;
            capaDisenoArr.coeficienteAporte = capaDiseno.coeficienteAporte;
            capaDisenoArr.coeficienteDrenaje = capaDiseno.coeficienteDrenaje;
            capaDisenoArr.espesor = capaDiseno.espesor;
            capaDisenoArr.aporteAlsn = capaDiseno.aporteAlsn;

            this.capasDiseno.forEach(capaDiseno => snDiseno += capaDiseno.aporteAlsn);
            this.myForm.controls['numestrucdis'].setValue(roundDecimal(snDiseno, 2));
            this.verificarCumplimientoDiseno();
        });

        //Set all validation messages
        this.validationMessages = {
            'numestrucdis': {
                'invalid': 'La estructura no cumple, SNreq > SNdis',
            },
        }
    }

    //Sets the correct error message to the this.errorMessages['fieldName'] 
    setErrorMessagesToForm() {

        for (var field in this.validationMessages) {
            const control = this.myForm.get(field);
            if (!control.valid) {
                this.logger.debug('Setting error message to ' + field);
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.errorMessages[field] = messages[key] + ' ';
                }
            }
        }
    }

    openModalAgregarCapa(): any {
        this.aashtoFlexibleService.capaDiseno = undefined;
        return this.modal.open(CapaModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }

    openModalEditarCapa(capaDiseno: CapaDiseno): any {
        this.aashtoFlexibleService.capaDiseno = capaDiseno;
        return this.modal.open(CapaModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }

    eliminarCapa(capaDiseno: CapaDiseno): void {
        this.logger.debug('capaDiseno: ' + JSON.stringify(capaDiseno));
        this.capasDiseno.splice(capaDiseno.id, 1);
        let snDiseno: number = 0;
        this.capasDiseno.forEach(capaDiseno => snDiseno += capaDiseno.aporteAlsn);
        this.myForm.controls['numestrucdis'].setValue(snDiseno);
        for(let x=0; x < this.capasDiseno.length; x++) {
            this.capasDiseno[x].id = x;
        }
        this.verificarCumplimientoDiseno();
    }

    verificarCumplimientoDiseno(): void {
        //Set numestruc control to no errors
        this.myForm.controls['numestrucdis'].setErrors(null, true);

        if (this.myForm.controls['numestrucreq'].value > this.myForm.controls['numestrucdis'].value) {
            //Raise error to numestrucdis control
            this.myForm.controls['numestrucdis'].setErrors({ invalid: 'invalid' }, true);
            this.setErrorMessagesToForm();
            this.disenoCumple = false;
        }
        else
        //myForm.controls.numestrucdis.dirty &&myForm.valid
            this.disenoCumple = true;
    }
}
