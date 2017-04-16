import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ng2-validation'

import { MainComponent } from './main.component';
import { EspesoresDisenoComponent } from './espesores-diseno.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//ng2-bootstrap
import { AlertModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';

//angular2-modal
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { EjesEquivalentesModal } from './ejesequiv.modal';
import { ConfiabilidadDisenoModal } from './confiabdiseno.modal';
import { ErrorEstandarModal } from './errestandar.modal';
import { ModuloResilienteModal } from './modulores.modal';
import { ServiciabilidadInicialModal } from './servicini.modal';
import { ServiciabilidadFinalModal } from './servicfin.modal';
import { NumeroEstructuralModal } from './numestruc.modal';
import { CapaModal } from './capa.modal';

import { AashtoFlexibleService } from './sn-flexible.service';
import { MessageService } from '../../messaging/message.service';

@NgModule({
    imports: [
        RouterModule,
        AlertModule,
        DatepickerModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CustomFormsModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
    ],
    declarations: [
        MainComponent,
        EspesoresDisenoComponent,
        EjesEquivalentesModal,
        ConfiabilidadDisenoModal,
        ErrorEstandarModal,
        ModuloResilienteModal,
        ServiciabilidadInicialModal,
        ServiciabilidadFinalModal,
        NumeroEstructuralModal,
        CapaModal,
    ],
    exports: [MainComponent],
    entryComponents: [
        EjesEquivalentesModal,
        ConfiabilidadDisenoModal,
        ErrorEstandarModal,
        ModuloResilienteModal,
        ServiciabilidadInicialModal,
        ServiciabilidadFinalModal,
        NumeroEstructuralModal,
        CapaModal,
    ],
    providers: [
        MessageService,
        AashtoFlexibleService,
    ]
})

export class SNFlexibleModule {

}
