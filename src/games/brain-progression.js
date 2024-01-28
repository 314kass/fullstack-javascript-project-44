
import getRandomInRange from '../getRandomInRange.js';
import engine from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const questGeneration = (progression) => {
  const whichNum = getRandomInRange(0, progression.length - 1);
  const quest = progression;
  const answer = quest[whichNum];
  quest[whichNum] = '..';
  return [quest.join(' '), answer];
};

const generateProgression = (num, plus, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(`${num + (plus * i)}`);
  }

  return progression;
};
const generateRound = () => {
  const num = getRandomInRange();
  const plus = getRandomInRange();
  const length = getRandomInRange(10, 15);
  const progression = generateProgression(num, plus, length);
  const [quest, answer] = questGeneration(progression);
  return [quest, answer];
};

export default () => {engine(gameDescription, generateRound)}
