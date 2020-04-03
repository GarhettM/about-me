'use strict';

// User is greated by the web page. The following are my global, top-level, variables for this set of labs.

var userName = prompt('Welcome to the world\'s most rudimentary guessing game! So, um, what\'s your name?');
var userInput;
var userScore = 0;

// Page knows the user now and begins the guessing game. NOTE TO SELF --- ADD User Score Increment later after each correct answer!

alert('Hi ' + userName + '! Let\'s play a game about me!');
console.log(userName);

// START OF GAME!

alert('Well, ' + userName + ', I hope you read the autobiography. Here we go!');

// Question 1 = Was I born in the United States of America? Answer = NO

function q1() {

  var answerToFirstQ = prompt('Was I born in the United States?').toUpperCase();

  if (answerToFirstQ === 'N' || answerToFirstQ === 'NO') {
    alert('Correct! Looks like you actually read the bio!');
    userScore++
  }else if (answerToFirstQ === 'Y' || answerToFirstQ === 'YES') {
    alert('Um, ya dun goofed!');
  }else{alert('Please type accurately! Answer YES or NO!')};

}
// Question 2 = Am I fluent in two languages? Answer = YES

function q2() {

  var answerToSecondQ = prompt('Am I fluent in two languages?').toUpperCase();

  if (answerToSecondQ === 'Y' || answerToSecondQ === 'YES') {
    alert('Correct! Let\'s keep going!');
  }else if (answerToSecondQ === 'N' || answerToSecondQ === 'NO') {
    alert('Um, ya dun goofed!');
  }else{alert('Please type accurately! Answer YES or NO!')};

}

// Question 3 = Am I currently an effective front end web developer? Answer = NO

function q3() {

  var answerToThirdQ = prompt('Am I currently an effective front end web developer?').toUpperCase();

  if (answerToThirdQ === 'N' || answerToThirdQ === 'NO') {
    alert('Correct! You\'re a savant!');
  }else if (answerToThirdQ === 'Y' || answerToThirdQ === 'YES') {
    alert('Um, ya dun goofed!');
  }else{alert('Please type accurately! Answer YES or NO!')};

}

// Question 4 = Will I become an effective front end web developer? Answer = YES! one day...

function q4() {

  var answerToFourthQ = prompt('Will I eventually become an effective front end web developer?').toUpperCase();

  if (answerToFourthQ === 'Y' || answerToFourthQ === 'YES') {
    alert('Correct! Let\'s keep going!');
  }else if (answerToFourthQ === 'N' || answerToFourthQ === 'NO') {
    alert('Um, ya dun goofed!');
  }else{alert('Please type accurately! Answer YES or NO!')};

}

// Question 5 = Do I have a professional background in Business Administration and Sales? Answer = YES

function q5() {

  var answerToFifthQ = prompt('Do I have a professional background in Business Administration and Sales?').toUpperCase();

  if (answerToFifthQ === 'Y' || answerToFifthQ === 'YES') {
    alert('Correct! Let\'s keep going!');
  }else if (answerToFifthQ === 'N' || answerToFifthQ === 'NO') {
    alert('Um, ya dun goofed!');
  }

}

alert('Well that wasn\'t terrible, let\'s try something harder!')

function questionSix()  {
  var counter = 0;
  
  var answer = '5';
  console.log('Question = ' + question);



  while (counter < 4)  {
    var question = prompt('What number am I thinking of 1-5? Careful, you only have 4 tries!'); 
    
    while (question === '' || isNaN(question)) {
      question = prompt('We are thinking of a number ya big dummy!')
    }
    
    if (question === answer) {
      alert('Great! You\'re a savant!');
      break;
    } else {
      alert('Wrong!')
      counter++    
    }
    
  }

  alert('Next hard question!')

  } 






function questionSeven()  {
  
  var carILike = ['rs5', 'a5', 'x5', '750i', 'model S'];
  var counter = 0;
  

  while (counter < 6) {
    var askWhatCarILike = prompt('What cars do you think I like? Only 6 guesses.');

    if (askWhatCarILike === carILike[0] || askWhatCarILike === carILike[1] || askWhatCarILike === carILike[2] || askWhatCarILike === carILike[3] || askWhatCarILike === carILike[4]) {
      alert('Good Job!')
      break;

    } else {
      counter++
      alert('Wrong!')
    }
  }

  alert('Welp thats all folks!')

}

q1();
q2();
q3();
questionSix();
questionSeven();