#!/usr/bin/env node
import helloName from '../hello-name.js';
import check from '../check.js';
import random from '../random.js';
import gcd from '../gcd.js';

const name = helloName();
console.log('Find the greatest common divisor of given numbers.');
let i = 0;
while (i < 4) {
  const randomNum1 = random();
  const randomNum2 = random();
  const quest = `${randomNum1} ${randomNum2}`;
  const correct = `${gcd(randomNum1, randomNum2)}`;
  i += check(quest, correct, name);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  if (i < 0) {
    break;
  }
}
