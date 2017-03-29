import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

//ng2-bootstrap
import { AlertModule } from 'ng2-bootstrap';


@NgModule({
    imports: [
        RouterModule,
        AlertModule
    ],
    declarations: [MainComponent],
    exports: [MainComponent],
})

export class UseCase1Module {

}
