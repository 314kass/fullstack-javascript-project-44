#!/usr/bin/env node
import getRandomInRange from '../getRandomInRange.js';
import engine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomInRange();
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => { engine(gameDescription, generateRound); };
