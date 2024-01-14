#!/usr/bin/env node
import helloName from '../hello-name.js';
import check from '../check.js';
import random from '../random.js';
import isPrime from '../is-prime.js';

const name = helloName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let i = 0;
while (i < 4) {
  const num = random();
  const correct = isPrime(num);
  const quest = [`${num}`];
  i += check(quest, correct, name);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  if (i < 0) {
    break;
  }
}
