import runGame from '../index.js';

const description = "Answer \"yes\" if given number is prime. Otherwise answer \"no\".";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

const isPrimeNum = (num) => {
    if (num === 2) return true;
    if (num < 2) return false;
    if (num % 2 === 0) return false;

    // let 
    
    for (let i = 3; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }
    return true;
}

const getRoundData = () => {
    const question = getRandomNumber(0, 100);
    
    const rightAnswer = isPrimeNum(question) ? "yes" : "no";
    return [question, rightAnswer];
}

export default () => runGame(description, getRoundData);