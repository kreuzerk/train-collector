import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';

export interface Train{
    departure: string,
    destination: string
}

@Injectable()
export class TrainService {
    
    private trains = new Subject<Train>();
    trainsStream = this.trains.asObservable();
    
    constructor() {
        /*
        this.trains.push({departure: 'Bern', destination: 'Brig'});
        this.trains.push({departure: 'Bern', destination: 'Zürich'});
        */
    }
    
    getTrains() : any {
        return this.trainsStream;
    }
    
    addNewTrain(train: Train): void{
        this.trains.next(train);
        console.log('added', this.trains)
    }
}