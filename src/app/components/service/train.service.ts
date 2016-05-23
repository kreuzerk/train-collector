export interface Train{
    departure: string,
    destination: string,
    description: string
}

export class TrainService {
    
    trains: Array<Train> = [];
    
    constructor() {
        this.trains.push({departure: 'Bern', destination: 'Brig', description: 'Test'});
        this.trains.push({departure: 'Bern', destination: 'Zürich', description: 'Test2'});
    }
    
    getTrains() : Array<Train> {
        return this.trains;
    }
    
    addNewTrain(train: Train): void{
        this.trains.push(train);
    }
    
    deleteTrain(index: number): void{
        this.trains.splice(index, 1);
    }
}