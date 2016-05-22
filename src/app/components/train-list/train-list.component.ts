import {Component} from 'angular2/core';
import {TrainService, Train} from '../service/train.service';

@Component({
    selector: 'train-list',
    template: `
            <h2>List Component</h2>
            <div class="row" *ngFor="#train of trains">
                {{ train.departure }} {{ train.destination }}
            </div>
    `,
    providers: [TrainService]
})
export class TrainList{
    trains: Array<Train>;
    
    constructor(private trainService: TrainService){
        this.trains = trainService.getTrains();
    }
} 