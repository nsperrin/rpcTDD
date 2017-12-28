const RockPaperScissorsModule = require('../src/Solution');
const RockPaperScissors = RockPaperScissorsModule.RockPaperScissors;
const RPS =  RockPaperScissorsModule.RPS;
const expect = require('chai').expect;

describe('Solution', ()=>{

    it('should work', (done)=>{
        done();
    });

    it('RPS has three distinct Enumerations', (done)=>{
        expect(RPS.ROCK).to.not.equal(RPS.PAPER);        
        expect(RPS.ROCK).to.not.equal(RPS.SCISSORS);
        expect(RPS.SCISSORS).to.not.equal(RPS.PAPER);
        expect(RPS.SCISSORS).to.not.equal(RPS.ROCK);
        expect(RPS.PAPER).to.not.equal(RPS.SCISSORS);
        expect(RPS.PAPER).to.not.equal(RPS.ROCK);
        done();
    });

    it('ties comeback as 0', (done)=>{
        expect(RockPaperScissors.roShamBo(RPS.ROCK, RPS.ROCK)).to.equal(0);
        expect(RockPaperScissors.roShamBo(RPS.PAPER, RPS.PAPER)).to.equal(0);
        expect(RockPaperScissors.roShamBo(RPS.SCISSORS, RPS.SCISSORS)).to.equal(0);
        done();
    });

    it('Paper Loses To Scissors', (done)=>{
        expect(RockPaperScissors.roShamBo(RPS.PAPER, RPS.SCISSORS)).to.equal(2);
        expect(RockPaperScissors.roShamBo(RPS.SCISSORS, RPS.PAPER)).to.equal(1);
        done();
    });

    it('Rock Loses To Paper', (done)=>{
        expect(RockPaperScissors.roShamBo(RPS.ROCK, RPS.PAPER)).to.equal(2);
        expect(RockPaperScissors.roShamBo(RPS.PAPER, RPS.ROCK)).to.equal(1);
        done();
    });

    it('Scissors loses Rock', (done)=>{
        expect(RockPaperScissors.roShamBo(RPS.SCISSORS, RPS.ROCK)).to.equal(2);
        expect(RockPaperScissors.roShamBo(RPS.ROCK, RPS.SCISSORS)).to.equal(1);
        done();
    });
});