'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// pop function is mutable changes the original array by removing last item in array and returning last item in array
// push function is mutable adds an item (argument) to an array as the last item in the original array returning the new array length

//  movePiece function uses pop function to remove last item and takes the popped item and pushes it

//  isLegal function checks if the popped item is less than the current last item in the destination array. access the last item with stacks.(array)[array.length - 1]. if the array is empty the popped item can be moved to the empty array(might already pass). return true if conditions are met or console.log an error message.

// checkForWin function checks if stacks.b === [4, 3, 2, 1] || stacks.c === [4, 3, 2, 1], console.log win

// towersOfHanoi function takes two arguments(startStack,endStack)
// start with movePiece or isLegal function. likely need to start with movePiece so there are items to check in isLegal. end with checkForWin function


const stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
// const pop = stacks[startStack]
stacks[endStack].push(stacks[startStack].pop());

  // if (startStack === 'a' && endStack === 'b') {
  //   stacks.b.push(stacks.a.pop())
  // } else if (startStack === 'b' && endStack === 'a') {
  //   stacks.a.push(stacks.b.pop())
  // } else if (startStack === 'a' && endStack === 'c') {
  //   stacks.c.push(stacks.a.pop())
  // } else if (startStack === 'b' && endStack === 'c') {
  //   stacks.c.push(stacks.b.pop())
  // } else if (startStack === 'a' && endStack === 'c') {
  //   stacks.c.push(stacks.a.pop())
  // } else if (startStack === 'c' && endStack === 'a') {
  //   stacks.a.push(stacks.c.pop())
  // } else if (startStack === 'c' && endStack === 'b') {
  //   stacks.b.push(stacks.c.pop())
  // }

}

function isLegal(startStack, endStack) {
// console.log(startStack);

// else {console.log("error, please resubmit"), return false}

}

function checkForWin() {
// if (stacks = { a: [], b: [4, 3, 2, 1], c: [] } || stacks = { a: [], b: [], c: [4, 3, 2, 1] }) {
//   return true
// } else {
//   return false
// }

}

function towersOfHanoi(startStack, endStack) {
movePiece(startStack, endStack);
// isLegal(startStack, endStack);
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
