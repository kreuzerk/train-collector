import {Component} from 'angular2/core';
import {TrainService, Train} from '../service/train.service';
import {TrainComponent} from '../train/train.component';

@Component({
    selector: 'train-list',
    template: `
            <h2>Erfasste Züge</h2>
            <div class="row" *ngFor="#train of trains; #i=index">
                <train [train]="train" [index]="i"></train>
            </div>
    `,
    directives: [ TrainComponent ]
})
export class TrainList{
    trains: Array<Train>;
    
    constructor(private trainService: TrainService){
        this.trains = trainService.getTrains();
    }
} 