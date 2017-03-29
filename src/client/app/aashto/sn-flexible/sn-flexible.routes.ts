import { Route } from '@angular/router';

import { MainComponent } from './main.component';


export const SNFlexibleRoutes: Route[] = [
  	{
    	path: '',
    	component: MainComponent,
  	},
    {
        path: 'sn-flexible',
        component: MainComponent
    },
];
