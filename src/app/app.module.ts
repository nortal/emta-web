import { LoginComponent } from './auth/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { CountryModule } from './country/country.module';
import { OperationalInterestModule } from './operational-interest/operational.interest.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';
import { SelectModule } from 'ng2-select';
import {
  TranslateModule,
  TranslateService,
  TranslatePipe,
  TranslateLoader,
  TranslateStaticLoader
} from 'ng2-translate';

import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { SearchComponent, SearchResultComponent } from './search';
import { ObjectDetailComponent } from './object-detail';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { LayoutModule } from './layout/layout.module';
import { UiModule } from './common/ui/ui.module';
import { UigModule } from './uig/uig.module';
import { PaymentComponent, TerminalComponent, PayerComponent, CustomerComponent } from './dollaz';
import { TrailComponent } from './trail'
import { ItemsListComponent } from './items/items-list.component'
import { LjsModule } from './ljs/ljs.module';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SearchResultComponent,
    TrailComponent,
    NoContentComponent,
    XLargeDirective,
    PaymentComponent,
    TerminalComponent,
    PayerComponent,
    CustomerComponent,
    ObjectDetailComponent,
    ItemsListComponent
  ],
  imports: [
    UiModule,
    LayoutModule,
    UigModule,
    Ng2PaginationModule,
    SelectModule,
    OperationalInterestModule,
    CountryModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    LjsModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthGuard,
    AuthService
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef,
              public appState: AppState) {
  }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
