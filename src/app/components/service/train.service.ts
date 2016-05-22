export interface Train{
    departure: string,
    destination: string
}

export class TrainService {
    
    trains: Array<Train> = [];
    
    constructor() {
        this.trains.push({departure: 'Bern', destination: 'Brig'});
        this.trains.push({departure: 'Bern', destination: 'Zürich'});
    }
    
    getTrains() : Array<Train> {
        return this.trains;
    }
    
    addNewTrain(train: Train): void{
        this.trains.push(train);
        console.log('Hinzugefügte Züge', this.trains);
    }
    
    popTrain(){
        this.trains.pop();
        console.log('Gepööpt', this.trains);
    }
}