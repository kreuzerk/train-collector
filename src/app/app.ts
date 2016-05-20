// Polyfills
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'angular2/bundles/angular2-polyfills.js';

// Angular2 Dependencies
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// Style Imports
import {bootstrap}    from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS, LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF, } from 'angular2/router'
import {PLATFORM_DIRECTIVES} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(LocationStrategy, {useClass : HashLocationStrategy}),
    provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})
]);
