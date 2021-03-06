import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from 'src/app/screens/main/pages/index/view/app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, ACTION_REDUCERS_MAP} from 'src/app/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {CustomerModule} from 'src/app/screens/customer/customer.module';
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(ACTION_REDUCERS_MAP, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    [HttpClientModule, LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })],
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
