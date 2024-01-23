import readlineSync from 'readline-sync';

const maxRound = 3;

const engine = (gameDescription, roundGeneration) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameDescription);

  for (let i = 0; i < maxRound; i += 1) {
    const [question, correctAnswer] = roundGeneration();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct! ');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct asnwer was '${correctAnswer}')`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default engine;
