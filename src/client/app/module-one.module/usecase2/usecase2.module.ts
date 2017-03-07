import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [MainComponent],
    exports: [MainComponent],
})

export class Usecase2Module {

}
