import { Component, ViewContainerRef } from '@angular/core';
import { Config } from './shared/index';
import { Logger } from "angular2-logger/core";

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
	private viewContainerRef: ViewContainerRef;
	public constructor(
		viewContainerRef:ViewContainerRef,
        private logger: Logger
		) {
		// You need this small hack in order to catch application root view container ref
		this.viewContainerRef = viewContainerRef;
		this.logger.debug('Environment config', Config);
	}
}
