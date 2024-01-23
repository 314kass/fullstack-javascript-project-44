#!/usr/bin/env node
import getRandomInRange from '../../src/getRandomInRange.js';
import engine from '../../src/index.js';

const gameDescription = 'What number is missing in the progression?';

const correctAnswer = (questGen) => {
  const whichNum = getRandomInRange(0,9);
  const quest = questGen;
  const answer = quest[whichNum];
  quest[whichNum] = '..';
  return [quest.join(' '), answer ];
};

const questGen = (num, plus) => {
  const questGen = [];
  for (let i = 0; i < 10; i += 1) {
    questGen.push(`${num + (plus * i)}`);
  };

  return correctAnswer(questGen);
};
const generateRound = () => {
  const num = getRandomInRange();
  const plus = getRandomInRange();
  const [quest, correctAnswer] = questGen(num, plus);
  return [quest, correctAnswer];
}

engine(gameDescription, generateRound);
