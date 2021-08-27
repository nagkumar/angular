import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from 'src/app/screens/root/pages/index/view/app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from 'src/app/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {CustomerModule} from 'src/app/screens/customer/customer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
