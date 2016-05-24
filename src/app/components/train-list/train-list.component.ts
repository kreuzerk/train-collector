import {Component} from 'angular2/core';
import {TrainService, Train} from '../../service/train.service';
import {TrainComponent} from '../train/train.component';

@Component({
    selector: 'train-list',
    template: `
            <h2>Züge</h2>
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-xs-12" *ngFor="#train of trains; #i=index">
                    <train [train]="train" [index]="i"></train>
                </div>
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