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
        BootstrapModalModule
    ],
    declarations: [
        MainComponent, EjesEquivalentesModal, ConfiabilidadDisenoModal
    ],
    exports: [MainComponent],
    entryComponents: [EjesEquivalentesModal, ConfiabilidadDisenoModal],
    providers: [
        MessageService
    ]
})

export class SNFlexibleModule {

}
