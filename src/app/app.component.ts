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

@Component({
    selector: 'app',
    template: `
   <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="jumbotron">
            <div class="row">
                <h1>Hallo</h1>
            </div>
        </div>
    </div>
    </nav>
  `
})
export class AppComponent {
}
