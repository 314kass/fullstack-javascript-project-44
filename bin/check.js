import readlineSync from 'readline-sync';

export default (quest, correct, name) => {
  const answer = readlineSync.question(`Question: ${quest}\nYour answer: `);
  if (answer === correct) {
    console.log('Correct! ');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
  return -10;
};
