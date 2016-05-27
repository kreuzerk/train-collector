// /**
//  * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
//  *
//  * ESTA WebJS: Angular-Modul der Hauptkomponente
//  *
//  * @author u220374 (Reto Lehmann)
//  * @version: 0.0.1
//  * @since 23.10.2015, 2015.
//  */
//
// // Vendor-Imports
// import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// import ngResource from 'angular-resource';
// import ngTranslate from 'angular-translate';
// import ngTranslateStaticFilesLoader from 'angular-translate-loader-static-files';
// import uiBootstrap from 'angular-ui-bootstrap';
//
// // Interne Modul-Imports
// import Components from './components/components';
// import AppComponent from './app.component';
//
// // Language file import
// import langDe from './languages/lang-de.json';
// import langEn from './languages/lang-en.json';
//
// angular.module('app', [
//     uiRouter, ngTranslate, ngTranslateStaticFilesLoader, ngResource,
//     uiBootstrap, Components.name
// ])
//     .config(/*@ngInject*/($translateProvider, $httpProvider) => {
//
//         // Translation settings
//         $translateProvider.translations('de', langDe);
//         $translateProvider.translations('en', langEn);
//         $translateProvider.preferredLanguage('de').useSanitizeValueStrategy('escape');
//
//         // Http service settings
//         $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//         $httpProvider.interceptors.push('oAuthInterceptorService');
//     })
//
//     // Globale Konfigurationeinstellungen
//     .constant('config', {
//         authServerUrl: 'http://localhost:9999/',
//         authRedirectUrl: window.location.origin + '#/logincallback',
//         authLoginUrl: 'oauth/authorize?response_type=token&client_id=acme&redirect_uri=',
//         authClientId: 'acme',
//         authClientSecret: 'acmesecret'
//     })
//     // Die App als Direktive exportieren
//     .directive('app', AppComponent);
//
//

/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

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
