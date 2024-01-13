#!/usr/bin/env node
import helloName from '../hello-name.js';
import check from '../check.js';
import random from '../random1-50.js';

const name = helloName();
console.log('What is the result of the expression?');
let i = 0;
while (i < 4) {
  const randomNum1 = random();
  const randomNum2 = random();
  const makeQuest = random();
  let quest = '';
  let correct = '';
  if (makeQuest < 21) {
    quest = `${randomNum1} - ${randomNum2}`;
    correct = `${randomNum1 - randomNum2}`;
  } else if (makeQuest > 40) {
    quest = `${randomNum1} * ${randomNum2}`;
    correct = `${randomNum1 * randomNum2}`;
  } else {
    quest = `${randomNum1} + ${randomNum2}`;
    correct = `${randomNum1 + randomNum2}`;
  }
  i += check(quest, correct, name);
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
    break;
  }
  if (i < 0) {
    break;
  }
}
