export class Player{
    name: string;
    gameStatus: boolean;
    time: any;
    
    setGameStatus(status){
        this.gameStatus = status;
    }

    setTime(time){
        this.time = time;
    }

    getTime(){
        return this.time;
    }

    getGameStatus(){
        return this.gameStatus;
    }
    
    getName(){
        return this.name;
    }
}