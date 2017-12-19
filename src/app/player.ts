export class Player{
    name: string;
    gameStatus: boolean;
    score: any;
    games: any;
    rank: any;
    
    
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

    getGameStatus(){
        return this.gameStatus;
    }
    
    getName(){
        return this.name;
    }
}