export class Player{
    name: string;
    gameStatus: boolean;
    score: any;
    games: any;
    rank: any;
    time: any;
    
    setGameStatus(status){
        this.gameStatus = status;
    }

    setScore(score){
        this.score = score;
    }
    setName(name){
        this.name = name;
    }

    getScore(){
        return this.score;
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