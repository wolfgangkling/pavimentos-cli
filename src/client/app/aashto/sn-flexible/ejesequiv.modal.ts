import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { MessageService } from '../../messaging/message.service';
import { Pavimento } from './pavimento.model';

export class EjesEquivalentesModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

@Component({
  moduleId: module.id,
  selector: 'modal-content',
  templateUrl: './ejesequiv.modal.html',
})
export class EjesEquivalentesModal implements CloseGuard, ModalComponent<EjesEquivalentesModalContext> {
  context: EjesEquivalentesModalContext;

  public wrongAnswer: boolean;

  constructor(
    public dialog: DialogRef<EjesEquivalentesModalContext>,
    private messageService: MessageService
  ) {
    this.context = dialog.context;
    //this.wrongAnswer = true;
    //dialog.setCloseGuard(this);
  }

  /*
  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return true;
  }
  */
  okModal() {
    let pavimento: Pavimento = {
      ejesequiv: 8000000,
      confiabdiseno: null,
      errestandar: null,
      modresili: null,
      servicini: null,
      servicfin: null,
      numestruc: null,
    }

    this.messageService.sendEventObject('ejesequiv', pavimento);
    this.dialog.close();
  }

  cancelModal() {
    console.log('Cancel Modal');
    this.messageService.sendEventObject('ejesequiv', 'ejesequiv CANCEL');
    this.dialog.close();
  }
}
