#!/usr/bin/env node
import helloName from '../hello-name.js';
import check from '../check.js';
import random from '../random.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = helloName();
let i = 0;
while (i < 4) {
  const randomNum = random();
  let correct = '';
  if (randomNum % 2 === 0) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  i += check(randomNum, correct, name);
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
    break;
  }
  if (i < 0) {
    break;
  }
}
