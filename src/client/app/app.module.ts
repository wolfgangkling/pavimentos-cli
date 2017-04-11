import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Tells the Angular router what is the static part of the URL. The router then only modifies 
//the remaining part of the URL
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { Logger } from "angular2-logger/core";
import {DEBUG_LOGGER_PROVIDERS, WARN_LOGGER_PROVIDERS, ERROR_LOGGER_PROVIDERS} from "angular2-logger/core";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		LoginModule,
		SignupModule,
		DashboardModule,
		SharedModule.forRoot(),
	],
	declarations: [AppComponent],
	providers: [
		{
			provide: APP_BASE_HREF,
			useValue: '<%= APP_BASE %>'
		},
		Logger,		
		DEBUG_LOGGER_PROVIDERS, //For development mode
		//WARN_LOGGER_PROVIDERS, //For production mode
		//ERROR_LOGGER_PROVIDERS, //For production mode
	],
	bootstrap: [AppComponent],
})

export class AppModule { }
