import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

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

  constructor(public dialog: DialogRef<EjesEquivalentesModalContext>) {
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

  cancelModal() {
    console.log('Cancel Modal');
    this.dialog.close();
  }
}
