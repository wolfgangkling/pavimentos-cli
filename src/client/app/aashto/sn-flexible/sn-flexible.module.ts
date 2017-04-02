import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ng2-validation'

import { MainComponent } from './main.component';
//import { AgreementDetailComponent } from './detail.component';

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
        EjesEquivalentesModal,
        ConfiabilidadDisenoModal,
        ErrorEstandarModal,
        ModuloResilienteModal,
        ServiciabilidadInicialModal,
        ServiciabilidadFinalModal,
        NumeroEstructuralModal,
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
    ],
    providers: [
        MessageService
    ]
})

export class SNFlexibleModule {

}
