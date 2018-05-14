'use strict'


// for loop
// Use a for loop to console.log each item in the array carsInReverse.


const carsInReverse = ['lebaron', 'concorde', 'wrangler'];


// for (let i = 0; carsInReverse.length > i; i++) {
//   console.log(carsInReverse[i]);
// }


// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"


const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};


// Use a for...in loop to console.log each key.


// for (let x in persons) {
//   console.log(x);
// }

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.


// for (let x in persons) {
//   if (x === 'birthDate') {
//     console.log(persons[x])
//   }
// }


// while loop
// Use a for loop to console.log the numbers 1 to 1000.


// for(let i = 1; i <= 1000; i++) {
// console.log(i)
// }

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.


// let i = 1;
//
// do {
//   console.log(i), i++
// }
// while (i <= 1000)


// When is a for loop better than a while loop?
// when you want to check a condition AND the number of iterations is known and you want to initialize a variable and increase/decrease the variable.

// How is the readability of the code affected?
// while loops indicate checking condition/s. for loops check conditions while increasing or decreasing a variable.

// What is the difference between a while loop and a do...while loop?
// the while loop checks if the condition is true before executing the code block. the do..while loop executes the code block once before checking if the condition is true.
