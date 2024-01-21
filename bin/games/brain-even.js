#!/usr/bin/env node
import getRandomInRange from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
function roundGen() {
  const randomNum = getRandomInRange();
  const roundGeneration = [randomNum];
  if (randomNum % 2 === 0) {
    roundGeneration.push('yes');
  } else {
    roundGeneration.push('no');
  }
  return roundGeneration;
}

engine(gameDescription, roundGen);
