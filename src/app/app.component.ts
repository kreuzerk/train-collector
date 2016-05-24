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
import {TrainCapture} from './components/train-capture/train-capture.component';
import {TrainList} from './components/train-list/train-list.component';
import {TrainService} from './service/train.service';

@Component({
    selector: 'app',
    template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <a class="navbar-brand">Train Collector</a>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="jumbotron">
            <div class="row">
                <train-capture></train-capture>
            </div>
        </div>
        <div class="jumbotron">
            <div class="row">
                <train-list></train-list>
            </div>
        </div>
    </div>
  `,
  directives: [ TrainCapture, TrainList ],
  providers: [ TrainService ]
})
export class AppComponent {
}
