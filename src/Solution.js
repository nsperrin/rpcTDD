const RPS = {
    ROCK:1,
    PAPER:2,
    SCISSORS:3
}

class RockPaperScissors{

    constructor(){}

    checkWinner(choice, losesTo, p1, p2){
        if (p1 === choice){
            return (p2 === losesTo)? 2 : 1;
        }
        if (p2 === choice) {
            return (p1 == losesTo)? 1 : 2;
        }
        return 0;
    }

    roShamBo(p1, p2){
        return Number(p1 !== p2) && (
        this.checkWinner(RPS.ROCK, RPS.PAPER, p1, p2) ||
        this.checkWinner(RPS.PAPER, RPS.SCISSORS, p1, p2)||
        this.checkWinner(RPS.SCISSORS, RPS.ROCK, p1, p2))
    }
}
module.exports={
    RPS:RPS,
    RockPaperScissors: new RockPaperScissors()
};