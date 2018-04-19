// Write a JavaScript function to display the current day and time.
  // researched the methods below for displaying date information. Created displayDateTime function. created const variable for date. created array of days to link to indexed result of getDay() method. created const variable for day to display day of week. created const variables for hours and minutes. return interpolated string displaying the current day and time

// getDate()-A Number, from 1 to 31, representing the day of the month
// getDay()-Returns the day of the week (from 0-6)
// getTime()-A Number, representing the number of milliseconds since midnight January 1, 1970
// getHours()-Returns the hour (from 0-23)
// getMinutes()-Returns minutes (from 0-59)
// new Date()-By default, JavaScript will use the browser's time zone and display a date as a full text string
// toLocaleString()-// The values you can get from toLocaleString are locale-specific, and implementation dependent. In many cases, they are determined via ICU, which in-turn, uses values from CLDR. The time zone itself is always pulled from an OS setting, which may be a TZDB identifier, or a Microsoft Windows time zone setting that goes through CLDR mappings. - https://stackoverflow.com/questions/41232181/how-does-tolocalestring-get-timezone-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa- this method works on new Date().toLocaleString() but doesn't display current day(of week)-'4/19/2018, 2:50:11 AM'


// function displayDateTime() {

// const date = new Date();
// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const day = days[date.getDay()];
// const hours = date.getHours();
// const minutes = date.getMinutes();
// return `the current day is ${day}, the time is now ${hours}:${minutes}`;
// }

// displayDateTime();


// Write a JavaScript program to convert a number to a string.

// researched method below. created numberToString function takes a number as a  parameter and changes it's data type to a string and returns the number as a string. the toString() method can also take parameters to display the number with different values.

// toString()-converts a number to a string.

// parameter values--
// radix	Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36.
// 2 - The number will show as a binary value
// 8 - The number will show as an octal value
// 16 - The number will show as an hexadecimal value-----w3schools.com


// function numberToString(num) {
//   return num.toString()
// }

// numberToString(56);

// Write a JavaScript program to convert a string to the number.
// researched gomakethings.com
// The parseInt() method converts a string into an integer (a whole number).
// The parseFloat() method converts a string into a point number (a number with decimal points). You can even pass in strings with random text in them.
// The Number() method converts a string to a number.
// Sometimes it’s an integer. Other times it’s a point number. And if you pass in a string with random text in it, you’ll get NaN, an acronym for “Not a Number.”
// As a result of this inconsistency, it’s a less safe choice than parseInt() and parseFloat(). If you know the format of the number you’d like, use those instead. If you want the string to fail with NaN if it has other characters in it, Number() may actually be a better choice.
// created stringToNumber function that takes a string as parameter. the Number() method takes the same string parameter and returns as a number

// function stringToNumber(string) {
//   return Number(string)
// }

// stringToNumber("3247")

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

// researched chapter 0 prep for week 1
// typeof ()
// How do I get return typeof Null & NaN? using NaN as parameter states NaN is a number.NaN is typeof when number is expected.
// Null is a typeof object. assigns values to variables you dont want to be default undefined.


// The null value is technically a primitive, the way "object" or "number" are primitives. This would typically mean that the type of null should also be "null". However, this is not the case because of a peculiarity with the way JavaScript was first defined.

// In the first implementation of JavaScript, values were represented in two parts - a type tag and the actual value. There were 5 type tags that could be used, and the tag for referencing an object was 0. The null value, however, was represented as the NULL pointer, which was 0x00 for most platforms. As a result of this similarity, null has the 0 type tag, which corresponds to an object.
// NaN The type of NaN, which stands for Not a Number is, surprisingly, a number. The reason for this is, in computing, NaN is actually technically a numeric data type. However, it is a numeric data type whose value cannot be represented using actual numbers. So, the name "Not a Number", doesn't mean that the value is not numeric. It instead means that the value cannot be expressed with numbers.---bitsofco.de

// function dataTypePrinter(datatype) {
//   return typeof datatype
// }

// dataTypePrinter(Number("hello"));
// dataTypePrinter(document.all);
// dataTypePrinter(null);


// Write a JavaScript program that adds 2 numbers together.
// + means add. created addTwoNumbers function that takes two parameters that need to be numbers and adds them together. checked typeof by nesting dataTypePrinter function. strings and booleans can be concatenated together but are not numbers.

// function addTwoNumbers(num1,num2) {
//   if (dataTypePrinter(num1) === 'number' && dataTypePrinter(num2) === 'number') {
//   return num1 + num2
// } else { return "please enter numbers"
// }
// }

// addTwoNumbers(3,);
// addTwoNumbers(543, 3);


// Write a JavaScript program that runs only when 2 things are true.

// researched
// -conditional statements -if/then/else/else if
// -logical operators- &&=and ||=or


// function twoTrue() {
// let thing1 = true;
// let thing2 = "";
//   if (thing1 && thing2) {
//     return "run"
//   }
// }

// twoTrue();

// Write a JavaScript program that runs when 1 of 2 things are true.
// research from conditional statements and logical operators using || to run if thing1 or thing2 is true. if both are true don't run

// function oneOfTwoTrue() {
// let thing1 = true;
// let thing2 = '';
// if (thing1 && thing2) {
//   return "dont run"
// }
//   else if (thing1 || thing2) {
//     return "run"
// }
// }

// oneOfTwoTrue();


// Write a JavaScript program that runs when both things are not true.
// research from conditional statements logical operators using ! to change from true to false

// function twoFalse() {
//   let thing1 = false;
//   let thing2 = false;
//   if (!thing1 && !thing2) {
//     return "run"
//   } else {
//     return "don't run"
//   }
// }

// twoFalse();
