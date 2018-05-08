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
// -------why doesnt stacks.startStack work?----------

//  isLegal function checks if the popped item is less than the current last item in the destination array. access the last item with stacks.(array)[array.length - 1]. if the array is empty the popped item can be moved to the empty array(might already pass). return true if conditions are met or console.log an error message.

// checkForWin function checks if stacks.b == [4, 3, 2, 1] || stacks.c == [4, 3, 2, 1], console.log win.
//-----create variable winning array and compare stacks.b and stacks.c with ==,not working------
// index[3] == 1 worked to pass test

// towersOfHanoi function takes two arguments(startStack,endStack)
// start with movePiece or isLegal function. likely need to start with movePiece so there are items to check in isLegal. end with checkForWin function

// ----console.log & return throws error, return in checkforwin function and log in towersofhanoi function------

// legalMove function combine isLegal and movePiece into one function

// resetGame function if checkforWin is true, stacks is reset to have all stacks in a array. entered stacks = to reset

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {

  stacks[endStack].push(stacks[startStack].pop());

}

const isLegal = (startStack, endStack) => {
  if (stacks[startStack][stacks[startStack].length - 1] > stacks[endStack][stacks[endStack].length - 1]) {
    return false
  } else if (stacks[endStack] == 0) {
    return true;
  } else {
    return true;
  }

}

const checkForWin = () => {
  if (stacks.b[3] == 1 || stacks.c[3] == 1) {
    return true
  } else {
    return false
  }
};

const legalMove = (startStack, endStack) => {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
}

const resetGame = () => {
  if (checkForWin()) {
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }
}

const towersOfHanoi = (startStack, endStack) => {

  legalMove(startStack, endStack);

  if (checkForWin()) {
    console.log('you win. now move the tower again')

  };
  resetGame();
}

const getPrompt = () => {
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
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });
  describe('#movePiece()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, {
        a: [4, 3],
        b: [1],
        c: [2]
      });
    });
  });
  describe('#legalMove()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, {
        a: [4, 3],
        b: [1],
        c: [2]
      });
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
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [],
        b: [],
        c: [4, 3, 2, 1]
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
