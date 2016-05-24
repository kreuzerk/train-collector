import {Component, Input} from 'angular2/core';
import {TrainService, Train} from '../../service/train.service';

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
                <img src="{{train.imageUrl}}" class="thumbnail img-responsive">
            </div>
            <div class="panel-footer">"{{ train.description }}"</div>
        </div>
    `,
    styles: [`
        img{
            min-width: 250pt;
            min-height: 170pt;
            max-width: 250pt;
            max-height: 170pt;
            margin: 0 auto;
        }
        .panel-footer{
            font-family: Georgia Italic
        }
    `]
})
export class TrainComponent{
    
    @Input() train: Train;
    @Input() index: number;
    
    constructor(private trainService: TrainService){}
    
    delete(): void{
        this.trainService.deleteTrain(this.index);
    }
}