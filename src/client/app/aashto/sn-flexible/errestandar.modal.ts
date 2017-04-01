
import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { MessageService } from '../../messaging/message.service';
import { Pavimento } from './pavimento.model';

export class ErrorEstandarModalContext extends BSModalContext {
}

@Component({
  moduleId: module.id,
  selector: 'modal-content',
  templateUrl: './errestandar.modal.html',
})
export class ErrorEstandarModal implements CloseGuard, ModalComponent<ErrorEstandarModalContext> {
  context: ErrorEstandarModalContext;
 
  constructor(
    public dialog: DialogRef<ErrorEstandarModalContext>,
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
