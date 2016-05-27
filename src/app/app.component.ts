/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Hauptkomponente der Angular-Applikation
 *
 * @author u220374 (Reto Lehmann)
 * @version: 0.0.1
 * @since 23.10.2015, 2015.
 */
import { Component } from 'angular2/core';
import { RouteConfig } from 'angular2/router';

import { HomeComponent } from './components/home/home.ts';
import { AboutComponent } from './components/about/about.ts';
import { ThemeComponent } from './components/theme/theme.ts';

@Component({
    selector: 'app',
    template: `
   <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <a class="navbar-brand pull-right" href="#" title="Go to homepage"></a>
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#navbar-collapse-1" aria-expanded="false"
                    ng-click="$ctrl.navCollapsed = !$ctrl.navCollapsed">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div uib-collapse="$ctrl.navCollapsed" class="collapse navbar-collapse" id="navbar-collapse-1">
            <ul class="nav navbar-nav navbar-left">
                <li><a [routerLink]="['Home']">Home</a></li>
                <li><a [routerLink]="['About']">About</a></li>
                <li><a [routerLink]="['Theme']">Theme</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <!--<li ng-show="!$ctrl.oAuthService.isLoggedIn()"><a ui-sref="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>-->
                <!--<li ng-show="$ctrl.oAuthService.isLoggedIn()"><a ui-sref="logout"><span class="glyphicon glyphicon-log-in"></span> Hallo {{ $ctrl.oAuthService.getUsername() }} - Logout</a></li>-->
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    },
    {
        path: '/theme',
        name: 'Theme',
        component: ThemeComponent
    }
])
export class AppComponent {
}
