#!/usr/bin/env node
import { helloName } from "./hello-name.js";
import readlineSync from 'readline-sync';

    const name = helloName();
    console.log('Answer "yes" if the number is even, otherwise answer "no"')
    let i = 0;
    while (i < 4) {
        const randomNum = Math.floor(Math.random() * (50 - 1)) + 1;;
        const answer = readlineSync.question(`Question: ${randomNum}\n Your answer: `);
        let correct = '';
        
            if (randomNum % 2 === 0 ) {
                correct = 'yes';
            } else {
                correct = 'no';
            }
            if (answer === correct) {
                console.log('Correct! ');
                i += 1;
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}`);
                i = 14;
            }
            if (i === 3) {
                console.log(`Congratulations, ${name}`);
                break;
            }
            
    }