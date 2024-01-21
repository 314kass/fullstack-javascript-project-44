import readlineSync from 'readline-sync';
import cli from './cli.js';

const maxRound = 3;

const engine = (gameDescription, roundGeneration) => {
  const name = cli();
  console.log(gameDescription);

  for (let i = 0; i < maxRound; i += 1) {
    const [question, correct] = roundGeneration();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correct) {
      console.log('Correct! ');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct asnwer was '${correct}')`);
      break;
    }
  }
};

export default engine;
