export interface Train{
    departure: string,
    destination: string,
    description: string,
    imageUrl: string
}

export class TrainService {
    
    trains: Array<Train> = [];
    
    constructor() {
        this.trains.push({
            departure: 'Bern', 
            destination: 'Brig', 
            description: 'Vom regnerischen Bern ins Sonnige Wallis',
            imageUrl: 'http://img.winfuture.de/teaser/660/6544.jpg'
        });
        this.trains.push({
            departure: 'Bern', 
            destination: 'Zürich', 
            description: 'Dieser Zug ist immer voll',
            imageUrl: 'http://files.newsnetz.ch/story/1/7/5/17590187/7/topelement.jpg' 
       });
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