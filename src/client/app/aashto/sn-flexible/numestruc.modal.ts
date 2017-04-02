import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { MessageService } from '../../messaging/message.service';
import { Pavimento } from './pavimento.model';

export class NumeroEstructuralModalContext extends BSModalContext {
}

@Component({
    moduleId: module.id,
    selector: 'modal-content',
    templateUrl: './numestruc.modal.html',
})
export class NumeroEstructuralModal implements CloseGuard, ModalComponent<NumeroEstructuralModalContext> {
    context: NumeroEstructuralModalContext;

    constructor(
        public dialog: DialogRef<NumeroEstructuralModalContext>,
        private messageService: MessageService
    ) {
        this.context = dialog.context;
    }

    okModal() {
        //this.messageService.sendEventObject('ejesequiv', 8000000);
        this.dialog.close();
    }

    cancelModal() {
        this.dialog.close();
    }
}
