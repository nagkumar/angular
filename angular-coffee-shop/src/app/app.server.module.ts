import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';

import {AppModule} from './app.module';
import {AppMainPage} from './pages/main/app.main.page';

@NgModule({
	      imports: [
		  AppModule,
		  ServerModule,
	      ],
	      bootstrap: [AppMainPage],
	  })
export class AppServerModule {}
