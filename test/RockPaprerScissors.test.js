const RockPaperScissors = require( "../src/RockPaperScissor");
const expect = require('chai').expect;

describe('Rocke Paper Scissors', ()=>{
    it('should exist', (done)=>{
        expect(RockPaperScissors).to.not.be.undefined;
        done();
    });
});