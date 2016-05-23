import {Component, Input} from 'angular2/core';
import {TrainService, Train} from '../service/train.service';

@Component({
    selector: 'train',
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Von {{train.departure}} nach {{train.destination}}
                                <span (click)="delete()" class="glyphicon glyphicon-trash pull-right" aria-hidden="true"></span>
                </h3>
            </div>
            <div class="panel-body">
                {{ train.description }}
            </div>
        </div>
    `
})
export class TrainComponent{
    
    @Input() train: Train;
    @Input() index: number;
    
    constructor(private trainService: TrainService){}
    
    delete(): void{
        this.trainService.deleteTrain(this.index);
    }
}