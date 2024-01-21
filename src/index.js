import readlineSync from 'readline-sync';

const maxRound = 3;

const engine = (gameDescription, roundGeneration) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
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
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default engine;
