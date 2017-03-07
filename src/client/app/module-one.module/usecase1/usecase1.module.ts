import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { AgreementDetailComponent } from './detail.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//ng2-bootstrap
import { AlertModule } from 'ng2-bootstrap';
import { DatepickerModule} from 'ng2-bootstrap';

@NgModule({
    imports: [
        RouterModule,
        AlertModule,
        DatepickerModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    declarations: [MainComponent, AgreementDetailComponent],
    exports: [MainComponent],
})

export class Usecase1Module {

}
