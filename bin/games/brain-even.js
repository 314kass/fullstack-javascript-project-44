#!/usr/bin/env node
import getRandomInRange from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const correctAnswer = (num) => num % 2 === 0 ? 'yes' : 'no';

const generateRound = () => {
  const num = getRandomInRange();

  const question = `${num}`;
  const answer = correctAnswer(num);
  return [question, answer];
};

engine(gameDescription, generateRound);
