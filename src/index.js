import readlineSync from 'readline-sync';
import sayGreeting from './cli.js';

const runGame = (description, getRoundData) => {
    const userName = sayGreeting();
    console.log(description);

    const roundsToWin = 3;
    let round = 0;

    while (round < roundsToWin) {
        const [question, rightAnswer] = getRoundData();

        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer === rightAnswer) {
            console.log("Correct!");
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`);
            return;
        }
        round += 1;
    }
    console.log(`Congratulations, ${userName}!`);
}

export default runGame;