#!/usr/bin/env node
import getRandomInRange from '../getRandomInRange.js';
import engine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const correctAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const generateRound = () => {
  const num = getRandomInRange();
  const question = `${num}`;
  const answer = `${correctAnswer(num)}`;
  return [question, answer];
};

engine(gameDescription, generateRound);
