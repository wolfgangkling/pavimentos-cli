import { Route } from '@angular/router';

import { MainComponent } from './main.component';
import { AgreementDetailComponent } from './detail.component';


export const UseCase1Routes: Route[] = [
    {
        path: 'module-one-usecase1',
        component: MainComponent
    },
    { 
        path: 'module-one-usecase1/detail/:id',
        component: AgreementDetailComponent 
    },
];
