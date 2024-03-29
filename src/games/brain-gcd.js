import getRandomInRange from '../getRandomInRange.js';
import engine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const correctAnswer = (num1, num2) => {
  if (num2 > 0) {
    const k = num1 % num2;
    return correctAnswer(num2, k);
  } return Math.abs(num1);
};

const generateRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();

  const question = `${num1} ${num2}`;
  const answer = `${correctAnswer(num1, num2)}`;
  return [question, answer];
};

export default () => { engine(gameDescription, generateRound); };
