#!/usr/bin/env node
import getRandomInRange from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'What is the result of the expression?';
function roundGen() {
  const roundGeneration = [];
  const operator = getRandomInRange(0, 2);
  const firstNum = getRandomInRange();
  const secondNum = getRandomInRange();
  const operatorChar = ['-', '*', '+'];
  const results = [`${firstNum - secondNum}`, `${firstNum * secondNum}`, `${firstNum + secondNum}`];
  roundGeneration.push(`${firstNum} ${operatorChar[operator]} ${secondNum}`);
  roundGeneration.push(results[operator]);

  return roundGeneration;
}

engine(gameDescription, roundGen);
