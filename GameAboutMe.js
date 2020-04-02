'use strict';

// User is greated by the web page. The following are my global, top-level, variables for this set of labs.

var userName = prompt('Welcome to the world\'s most rudimentary guessing game! So, um, what\'s your name?');
var userInput;
var userScore = 0;

// Page knows the user now and begins the guessing game.

// alert('Hi ' + userName + '! Let\'s play a game about me!');
// console.log(userName);

// // START OF GAME!

// alert('Well, ' + userName + ', I hope you read the autobiography. Here we go!');

// // Question 1 = Was I born in the United States of America? Answer = NO

// var answerToFirstQ = prompt('Was I born in the United States?').toUpperCase();

// if (answerToFirstQ === 'N' || answerToFirstQ === 'NO') {
//   alert('Correct! Looks like you actually read the bio!');
// }else if (answerToFirstQ === 'Y' || answerToFirstQ === 'YES') {
//   alert('Um, ya dun goofed!');
// }else{alert('Please type accurately! Answer YES or NO!')};

// // Question 2 = Am I fluent in two languages? Answer = YES

// var answerToSecondQ = prompt('Am I fluent in two languages?').toUpperCase();

// if (answerToSecondQ === 'Y' || answerToSecondQ === 'YES') {
//   alert('Correct! Let\'s keep going!');
// }else if (answerToSecondQ === 'N' || answerToSecondQ === 'NO') {
//   alert('Um, ya dun goofed!');
// }else{alert('Please type accurately! Answer YES or NO!')};

// // Question 3 = Am I currently an effective front end web developer? Answer = NO

// var answerToThirdQ = prompt('Am I currently an effective front end web developer?').toUpperCase();

// if (answerToThirdQ === 'N' || answerToThirdQ === 'NO') {
//   alert('Correct! You\'re a savant!');
// }else if (answerToThirdQ === 'Y' || answerToThirdQ === 'YES') {
//   alert('Um, ya dun goofed!');
// }else{alert('Please type accurately! Answer YES or NO!')};

// // Question 4 = Will I become an effective front end web developer? Answer = YES! one day...

// var answerToFourthQ = prompt('Will I eventually become an effective front end web developer?').toUpperCase();

// if (answerToFourthQ === 'Y' || answerToFourthQ === 'YES') {
//   alert('Correct! Let\'s keep going!');
// }else if (answerToFourthQ === 'N' || answerToFourthQ === 'NO') {
//   alert('Um, ya dun goofed!');
// }else{alert('Please type accurately! Answer YES or NO!')};

// // Question 5 = Do I have a professional background in Business Administration and Sales? Answer = YES

// var answerToFifthQ = prompt('Do I have a professional background in Business Administration and Sales?').toUpperCase();

// if (answerToFifthQ === 'Y' || answerToFifthQ === 'YES') {
//   alert('Correct! Let\'s keep going!');
// }else if (answerToFifthQ === 'N' || answerToFifthQ === 'NO') {
//   alert('Um, ya dun goofed!');
// }

