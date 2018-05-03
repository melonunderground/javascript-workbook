'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  const wordSplit = word.split('');
  if (wordSplit[0] === "a" || wordSplit[0] === "e" || wordSplit[0] === "i" || wordSplit[0] === "o" || wordSplit[0] === "u") {
    return wordSplit.join('') + "yay"
  }

  const vowelSearch = (vowel) => vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u";

  const trimLowerCaseArray = (word) => word.trim().toLowerCase().split('').findIndex(vowelSearch);

  const wordStart = (word, index) => word.slice(0, index).toLowerCase() + "ay";

  const beginning = wordStart(word, trimLowerCaseArray(word));

  const wordEnd = (word, index) => word.slice(index).toLowerCase();

  const end = wordEnd(word, trimLowerCaseArray(word));

  return end + beginning;

}


// planis50% grade-----

// const lowerCase = (word) => word.toLowerCase();
// return lowerCase(word);
// const trim = (word) => word.trim();
// lowerCase(word);

//scope
// global = word
// local = all wordchanges

//take one word as a parameter and store the word as a variable in the function (const word1 = word)
// change the word to lowercase
// change the word to trim any whitespace
// change the word to an array to separate each letter
// use findIndex on array. list vowels on search function
// create a variable that takes take the index of first vowel and enter the start parameter in the substr method or slice method without the optional length parameter to access the first vowel to the end of the word
//
// slice(0,index) = const wordStart
// slice(index)= const wordEnd
//

// once the vowel is found read the previous letter and store in the end of the word
// if the first letter (word[0] === a,e,i,o,u) is a vowel add "yay" to the end
// else add "ay" to the end




function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
