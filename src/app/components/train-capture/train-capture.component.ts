import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';
import {TrainService} from '../service/train.service';

@Component({
    selector: 'train-capture',
    template: `
    <div class="row">
        <form [ngFormModel]="trainForm" (submit)="addNewTrain()">
            <div class="input-group">
                <span class="input-group-addon addon-custom">Von</span>
                <input type="text" class="form-control" ngControl="departure" placeHolder="Von">
            </div>
            <div *ngIf="departure.dirty && departure.hasError('required')">
                    Bitte gib ein Abfahrtsort ein
            </div>
            <div class="input-group top-buffer">
                <span class="input-group-addon addon-custom">Nach</span>
                <input type="text" class="form-control" ngControl="destination" placeHolder="Nach">
            </div>
            <div *ngIf="destination.dirty && destination.hasError('required')">
                    Bitte gib einen Zielort ein
            </div>
            <button [disabled]="!trainForm.valid" type="submit" class="btn btn-primary top-buffer">Zug erfassen</button>
        </form>
    </div>
    `,
    styles: [`
        .top-buffer{
            margin-top: 10px;   
        }
        .input-group-addon {
            min-width:80px;
        }
        .input-group{
            width: 300px;
        }
    `],
    providers: [TrainService]
})
export class TrainCapture{
    
    trainForm: ControlGroup;
    departure: Control;
    destination: Control;
    trains: Array<any>;
    
    constructor(private _fb: FormBuilder, private trainService: TrainService){
        this.departure = _fb.control('', Validators.required);
        this.destination = _fb.control('', Validators.required);
        this.trainForm = _fb.group({
            departure: this.departure,
            destination: this.destination
        })
        
        this.trains = this.trainService.getTrains();
    }
    
    addNewTrain(){
        this.trainService.addNewTrain({
            destination: this.destination.value,
            departure: this.departure.value   
        })
    }
}