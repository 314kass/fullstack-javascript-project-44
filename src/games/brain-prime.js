#!/usr/bin/env node
import getRandomInRange from '../getRandomInRange.js';
import engine from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const num = getRandomInRange();
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default (gameDescription) => { engine(gameDescription, generateRound); };
