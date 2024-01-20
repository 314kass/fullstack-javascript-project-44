#!/usr/bin/env node
import { getRandomInRange } from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
function roundGen () {
  const randomNum = getRandomInRange();
  const roundGeneration = [];
  roundGeneration.push(`${randomNum}`);
  roundGeneration.push(`${isPrime(randomNum)}`);
  
  return roundGeneration;
}

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

engine(gameDescription,roundGen);
