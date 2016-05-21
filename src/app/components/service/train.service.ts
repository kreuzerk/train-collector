export class TrainService {
    
    trains: Array<any> = [];
    
    constructor() {
        this.trains.push({departure: 'Bern', destination: 'Brig'});
        this.trains.push({departure: 'Bern', destination: 'Zürich'});
    }
    
    getTrains() : Array<any> {
        return this.trains;
    }
    
    addNewTrain(train: any): void{
        this.trains.push(train);
        console.log('Hinzugefügte Züge', this.trains);
    }
    
    popTrain(){
        this.trains.pop();
        console.log('Gepööpt', this.trains);
    }
}