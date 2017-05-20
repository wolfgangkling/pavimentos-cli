import { Component, OnInit, OnDestroy, ViewContainerRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoggerService } from '../../logger/logger.service';
import { AashtoFlexibleService } from './sn-flexible.service';
import { Pavimento, CapaDiseno } from './pavimento.model';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CapaModal, CapaModalContext } from './capa.modal';
import { InformeModal, InformeModalContext } from './informe.modal';
import { MessageService } from '../../messaging/message.service';
import { Subscription } from 'rxjs/Subscription';
import { roundDecimal } from '../../utils/math.util';
import { Router } from '@angular/router';
//import * as jsPDF from 'jspdf';
declare let jsPDF: any;

@Component({
    moduleId: module.id,
    selector: 'espesores-diseno',
    templateUrl: './espesores-diseno.component.html',
    providers: [
        FormBuilder, { provide: 'Window', useValue: window },
    ]
})

export class EspesoresDisenoComponent implements OnInit, OnDestroy {

    myForm: FormGroup;
    subscriptions: { [key: string]: Subscription } = {};
    capasDiseno: Array<CapaDiseno> = new Array<CapaDiseno>();
    validationMessages: { [key: string]: { [key: string]: string } } = {};
    errorMessages: { [key: string]: string } = {};
    disenoCumple: boolean = false;
    numestrucdis: number;

    constructor(
        private formBuilder: FormBuilder,
        private logger: LoggerService,
        private aashtoFlexibleService: AashtoFlexibleService,
        overlay: Overlay,
        vcRef: ViewContainerRef,
        public modal: Modal,
        private messageService: MessageService,
        private router: Router,
        @Inject('Window') private window: Window,
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

        if (this.aashtoFlexibleService.capasDiseno != undefined)
            this.capasDiseno = this.aashtoFlexibleService.capasDiseno;


        //Observando eventos de creación de capas
        this.subscriptions['nueva_capa_diseno'] = this.messageService.getEventObject('nueva_capa_diseno').subscribe(eventObject => {
            console.log('***** Evento: nueva_capa_diseno');
            this.agregarCapa(<CapaDiseno>eventObject);
        });

        //Observando eventos de información de referencia para generación del pdf
        this.subscriptions['info_referencia'] = this.messageService.getEventObject('info_referencia').subscribe(eventObject => {
            this.generarPdf();
        });

        /* 
        //Delete, only por testing purposes
        let capaDiseno: CapaDiseno = {
            id: 0,
            tipoMaterial: 'Concreto asfáltico',
            nombre: 'Nombre concreto asfáltico',
            coeficienteAporte: 1,
            coeficienteDrenaje: 1,
            espesor: 1,
            aporteAlsn: undefined,
        };
        capaDiseno.aporteAlsn = roundDecimal(capaDiseno.espesor / 2.54 *
            capaDiseno.coeficienteDrenaje * capaDiseno.coeficienteAporte, 2);
        this.agregarCapa(capaDiseno);
        let capaDiseno2: CapaDiseno = {
            id: 0,
            tipoMaterial: 'Base granular',
            nombre: 'Nombre base granular',
            coeficienteAporte: 3,
            coeficienteDrenaje: 3,
            espesor: 3,
            aporteAlsn: undefined,
        };
        capaDiseno2.aporteAlsn = roundDecimal(capaDiseno2.espesor / 2.54 *
            capaDiseno2.coeficienteDrenaje * capaDiseno2.coeficienteAporte, 2);
        this.agregarCapa(capaDiseno2);
        //END Delete, only por testing purposes
        */

        //Observando eventos de modificacion de capas
        this.subscriptions['edit_capa_diseno'] = this.messageService.getEventObject('edit_capa_diseno').subscribe(eventObject => {
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
            this.numestrucdis = roundDecimal(snDiseno, 2);
            this.myForm.controls['numestrucdis'].setValue(this.numestrucdis);
            this.verificarCumplimientoDiseno();
        });

        //Set all validation messages
        this.validationMessages = {
            'numestrucdis': {
                'invalid': 'La estructura no cumple, SNreq > SNdis',
            },
        }
        let snDiseno: number = 0;
        this.capasDiseno.forEach(capaDiseno => snDiseno += capaDiseno.aporteAlsn);
        this.numestrucdis = roundDecimal(snDiseno, 2);
        this.myForm.controls['numestrucdis'].setValue(this.numestrucdis);
        this.verificarCumplimientoDiseno();
    }

    ngOnDestroy(){
        this.subscriptions['nueva_capa_diseno'].unsubscribe();
        this.subscriptions['info_referencia'].unsubscribe();
        this.subscriptions['edit_capa_diseno'].unsubscribe();
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

    openModalCrearPdf(): any {
        this.aashtoFlexibleService.capaDiseno = undefined;
        return this.modal.open(InformeModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
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
        this.numestrucdis = roundDecimal(snDiseno, 2);
        this.myForm.controls['numestrucdis'].setValue(this.numestrucdis);
        for (let x = 0; x < this.capasDiseno.length; x++) {
            this.capasDiseno[x].id = x;
        }
        this.verificarCumplimientoDiseno();
    }

    agregarCapa(capaDiseno: CapaDiseno): void {
        console.log('***** agregarCapa');
        let snDiseno: number = 0;
        capaDiseno.id = this.capasDiseno.length;
        this.capasDiseno.push(capaDiseno);
        this.capasDiseno.forEach(capaDiseno => snDiseno += capaDiseno.aporteAlsn);
        this.numestrucdis = roundDecimal(snDiseno, 2);
        this.myForm.controls['numestrucdis'].setValue(this.numestrucdis);
        this.verificarCumplimientoDiseno();
        if (this.aashtoFlexibleService.capasDiseno == undefined)
            this.aashtoFlexibleService.capasDiseno = this.capasDiseno;
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

    generarPdf(): void {

        var FL = 30;
        var l = FL;
        var LF = 5;

        var doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(105, l, 'Pavimation', null, null, 'center');
        doc.setFontSize(8);
        doc.setFontStyle('bold');
        doc.text(105, l += LF, 'www.pavimation.com', null, null, 'center');
        doc.setFontStyle('italic');
        doc.text(105, l += LF, 'Diseño de espesores de pavimento flexible,', null, null, 'center');
        doc.text(105, l += LF, 'de acuerdo con la Guía de diseño de estructuras de pavimento de la AASHTO 1993', null, null, 'center');
        doc.setFontSize(13);
        doc.setFontStyle('bold');
        doc.text(20, l += 15, 'Información de referencia', null, null);
        doc.setLineWidth(0.4);
        doc.line(20, l += LF, 200, l);
        doc.setFontSize(10);
        doc.setFontStyle('bold');
        doc.text(20, l += LF + LF, 'Nombre del proyecto:', null, null);
        doc.setFontStyle('normal');
        doc.text(58, l, this.aashtoFlexibleService.infoReferencia.proyecto, null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Vía:', null, null);
        doc.setFontStyle('normal');
        doc.text(27, l, this.aashtoFlexibleService.infoReferencia.via, null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Localización:', null, null);
        doc.setFontStyle('normal');
        doc.text(43, l, this.aashtoFlexibleService.infoReferencia.localizacion, null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Cliente / Agencia:', null, null);
        doc.setFontStyle('normal');
        doc.text(50, l, this.aashtoFlexibleService.infoReferencia.cliente, null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Ingeniero de diseño:', null, null);
        doc.setFontStyle('normal');
        doc.text(55, l, this.aashtoFlexibleService.infoReferencia.ingenieroDiseno, null, null);
        doc.setFontSize(13);
        doc.setFontStyle('bold');
        doc.text(20, l += 15, 'Datos de entrada del diseño', null, null);
        doc.setLineWidth(0.4);
        doc.line(20, l += LF, 200, l);
        doc.setFontSize(10);
        doc.setFontStyle('bold');
        doc.text(20, l += LF + LF, 'Número estructural requerido (SNreq):', null, null);
        doc.setFontStyle('normal');
        doc.text(86, l, this.aashtoFlexibleService.pavimento.numestruc + ' pulg', null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Ejes equivalentes en el carril de diseño (N):', null, null);
        doc.setFontStyle('normal');
        doc.text(94, l, this.aashtoFlexibleService.pavimento.ejesequiv + ' (ejes simples de 8.2t)', null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Confiabilidad del diseño (R):', null, null);
        doc.setFontStyle('normal');
        doc.text(69, l, this.aashtoFlexibleService.pavimento.confiabdiseno + '%', null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Error estándar combinado (So):', null, null);
        doc.setFontStyle('normal');
        doc.text(74, l, this.aashtoFlexibleService.pavimento.errestandar + '', null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Módulo resiliente de la subrasante (Mr):', null, null);
        doc.setFontStyle('normal');
        doc.text(88, l, this.aashtoFlexibleService.pavimento.modresili + ' MPa', null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Serviciabilidad inicial (Po):', null, null);
        doc.setFontStyle('normal');
        doc.text(66, l, this.aashtoFlexibleService.pavimento.servicini + '', null, null);
        doc.setFontStyle('bold');
        doc.text(20, l += LF, 'Serviciabilidad final (Pt):', null, null);
        doc.setFontStyle('normal');
        doc.text(62, l, this.aashtoFlexibleService.pavimento.servicfin + '', null, null);
        doc.setFontSize(13);
        doc.setFontStyle('bold');
        doc.text(20, l += 15, 'Estructura de diseño', null, null);
        doc.setLineWidth(0.4);
        doc.line(20, l += LF, 200, l);
        doc.setLineWidth(0.2);
        doc.line(25, l += LF, 194, l);
        doc.setFontStyle('bold');
        doc.setFontSize(8);
        let p = 2;
        let w = 45;
        let s = 20
        doc.text(p += 50, l += LF, 'Capa', null, null);
        doc.text(p += w, l, 'Coeficiente', null, null);
        doc.text(p += w - s, l, 'Coeficiente', null, null);
        doc.text(p += w - s, l, 'Espesor de', null, null);
        doc.text(p += w - s, l, 'Aporte al', null, null);
        doc.text(p = 52, l += LF, '', null, null);
        doc.text(p += w, l, 'de aporte (a)', null, null);
        doc.text(p += w - s, l, 'de drenaje (m)', null, null);
        doc.text(p += w - s, l, 'la capa (cm)', null, null);
        doc.text(p += w - s, l, 'SN', null, null);
        doc.line(25, l += LF, 194, l);
        let capa1 = {
            id: 0,
            tipoMaterial: 'Base tratada con emulsión',
            nombre: '',
            coeficienteAporte: 1.25,
            coeficienteDrenaje: 0.53,
            espesor: 1,
            aporteAlsn: 1,
        }

        let capa2 = {
            id: 1,
            tipoMaterial: 'Base tratada con emulsión',
            nombre: '',
            coeficienteAporte: 1.25,
            coeficienteDrenaje: 0.53,
            espesor: 1,
            aporteAlsn: 1,
        }
        let capasDiseno = [capa1, capa2];

        doc.setFontStyle('normal');
        this.capasDiseno.forEach(i => {
            doc.text(p = 35, l += LF, i.tipoMaterial, null, null);
            doc.text(p += 65, l, i.coeficienteAporte + '', null, null);
            doc.text(p += 25, l, i.coeficienteDrenaje + '', null, null);
            doc.text(p += 24, l, i.espesor + '', null, null);
            doc.text(p += 24, l, i.aporteAlsn + '', null, null);
        });
        doc.line(25, l += LF, 194, l);
        doc.setFontStyle('bold');
        doc.text(p = 150, l += LF, 'Total (SNdis)', null, null);
        doc.text(p = 173, l, this.numestrucdis + '', null, null);

        doc.save('asshto-flex-(www.pavimation.com).pdf');

    }

    parametrosDiseno(): void {
        if (this.aashtoFlexibleService.pavimento != undefined) {
            this.router.navigateByUrl('/dashboard/sn-flexible', { skipLocationChange: true });
        }
    }
}
