#!/usr/bin/env node
import getRandomInRange from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'What is the result of the expression?';
function roundGen() {
  const roundGeneration = [];
  const operator = getRandomInRange(1, 3);
  const firstNum = getRandomInRange();
  const secondNum = getRandomInRange();
  if (operator === 1) {
    roundGeneration.push(`${firstNum} - ${secondNum}`);
    roundGeneration.push(`${firstNum - secondNum}`);
  } else if (operator === 2) {
    roundGeneration.push(`${firstNum} * ${secondNum}`);
    roundGeneration.push(`${firstNum * secondNum}`);
  } else {
    roundGeneration.push(`${firstNum} + ${secondNum}`);
    roundGeneration.push(`${firstNum + secondNum}`);
  }
  return roundGeneration;
}

engine(gameDescription, roundGen);
