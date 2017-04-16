import { Route } from '@angular/router';

import { MainComponent } from './main.component';
import { EspesoresDisenoComponent } from './espesores-diseno.component';


export const SNFlexibleRoutes: Route[] = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'sn-flexible',
        component: MainComponent,
    },
    {
        path: 'sn-flexible/espesores',
        component: EspesoresDisenoComponent
    },
];
