#!/usr/bin/env node
import getRandomInRange from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'What is the result of the expression?';
function roundGen() {
  const roundGeneration = [];
  const operator = getRandomInRange(0, 2);
  const operatorChar = ['-', '*', '+']
  const firstNum = getRandomInRange();
  const secondNum = getRandomInRange();
  roundGeneration.push(`${firstNum} ${operatorChar[operator]} ${secondNum}`);
  roundGeneration.push(`${eval(`${firstNum} ${operatorChar[operator]} ${secondNum}`)}`);
  
  return roundGeneration;
}

engine(gameDescription, roundGen);
