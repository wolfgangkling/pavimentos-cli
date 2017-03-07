import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';
import { UseCase1Routes as Mod1UseCase1Routes} from '../module-one.module/usecase1/usecase1.routes';
import { UseCase2Routes as Mod1UseCase2Routes} from '../module-one.module/usecase2/usecase2.routes';
import { UseCase1Routes as Mod2UseCase1Routes} from '../module-two.module/usecase1/usecase1.routes';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
			...HomeRoutes,
			...ChartRoutes,
			...BSComponentRoutes,
			...TableRoutes,
			...BlankPageRoutes,
			...FormRoutes,
			...GridRoutes,
			...BSElementRoutes,
			...Mod1UseCase1Routes,
			...Mod1UseCase2Routes,
			...Mod2UseCase1Routes,
    	]
  	}
];
