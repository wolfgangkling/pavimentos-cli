import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main.component';

//ng2-bootstrap
import { AlertModule } from 'ng2-bootstrap';

import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        RouterModule,
        AlertModule,
        CommonModule,
        MyDatePickerModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        MainComponent,
    ],
    exports: [
        MainComponent,
    ],
})

export class Usecase2Module {

}
