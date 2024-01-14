#!/usr/bin/env node
import helloName from '../hello-name.js';
import check from '../check.js';
import random from '../random.js';

const name = helloName();
console.log('What number is missing in the progression?');
let i = 0;

while (i < 4) {
  const num = random();
  const plus = random();
  const questArray = [`${num}`];
  for (let j = 1; j < 10; j += 1) {
    questArray.push(`${num + plus * j}`);
  }
  const whichNum = Math.floor(random() / 6);
  const correct = questArray[whichNum];
  questArray[whichNum] = '..';
  const quest = questArray.join(' ');
  i += check(quest, correct, name);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  if (i < 0) {
    break;
  }
}
