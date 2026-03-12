import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1));

const sayEven = (userName) => {
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
    
    const roundsToWin = 3;
    let round = 0;

    while (round < roundsToWin) {
        const randomNumber = getRandomNumber(1, 100); 
        const rightAnswer = isEven(randomNumber) ? "yes" : "no";

        console.log(`Question: ${randomNumber}`);
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
export default sayEven;