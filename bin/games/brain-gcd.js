#!/usr/bin/env node
import { getRandomInRange } from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.'
function roundGen () {
  const firstNum = getRandomInRange();
  const secondNum = getRandomInRange();
  const roundGeneration = [];
  roundGeneration.push(`${firstNum} ${secondNum}`);
  roundGeneration.push(`${gcd(firstNum, secondNum)}`);
  
  return roundGeneration;
}

function gcd(n, m) {
  if (m > 0) {
    const k = n % m;
    return gcd(m, k);
  } return Math.abs(n);
}

engine(gameDescription,roundGen);
