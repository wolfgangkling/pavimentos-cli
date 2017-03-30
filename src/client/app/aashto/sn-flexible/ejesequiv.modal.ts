import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class EjesEquivalentesModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
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
    this.wrongAnswer = true;
    //dialog.setCloseGuard(this);
  }

  onKeyUp(value: any) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}
