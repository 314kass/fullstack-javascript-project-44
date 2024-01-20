#!/usr/bin/env node
import { getRandomInRange } from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
function roundGen () {
  const randomNum = getRandomInRange();
  const plus = getRandomInRange();
  const quest = [];
  const roundGeneration = [];
  for (let i = 0; i < 10; i += 1) {
    quest.push(`${randomNum + (plus * i)}`);
  }
  const whichNum = getRandomInRange(1,10);
  const temp = quest[whichNum];
  quest[whichNum] = '..';
  roundGeneration.push(quest.join(' '));
  roundGeneration.push(temp);
  
  return roundGeneration;
}

engine(gameDescription,roundGen);
