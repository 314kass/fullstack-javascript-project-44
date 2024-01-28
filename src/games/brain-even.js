#!/usr/bin/env node
import getRandomInRange from '../getRandomInRange.js';
import engine from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomInRange();
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default (gameDescription) => { engine(gameDescription, generateRound); };
