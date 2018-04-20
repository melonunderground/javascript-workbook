'use strict';
/*

rockPaperScissors--
start the game by taking a parameter for hand1 and hand2. both hands have 3 options so there is a total of 9 possible combinations.

if both hands are the same > it's a tie
h1 Rock h2 Rock
h1 Paper h2 Paper
h1 Scissors h2 Scissors

if h1 Rock h2 Paper > h2 Wins
if h1 Rock h2 Scissors > h1 Wins

if h1 Paper h2 Scissors > h2 Wins
if h1 Paper h2 Rock > h1 Wins

if h1 Scissors h2 Rock > h2 Wins
if h1 Scissors h2 Paper > h1 Wins

sort all of the h1 and h2 Wins together

if h1 === h2 > it's a tie
if h1 Rock && h2 Paper or h1 Paper && h2 Scissors or h1 Scissors && h2 Rock > h2 Wins
if h1 Rock && h2 Scissors or if h1 Paper && h2 Rock or h1 Scissors && h2 Paper > h1 Wins

*/

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

if (hand1 === 'rock' && hand2 === 'paper'|| hand1 === 'paper' && hand2 === 'scissors' ||
hand1 === 'scissors' && hand2 === 'rock')
{return "Hand two wins!"}
else if (hand1 === 'rock' && hand2 === 'scissors' ||
hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper')
{return "Hand one wins!"} 
else if (hand1 === hand2) {return "It's a tie!" }
}



function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
