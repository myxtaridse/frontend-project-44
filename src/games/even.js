import runGame from '../index.js';

const description = "Answer \"yes\" if the number is even, otherwise answer \"no\".";

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1));

const getRoundData = () => {
    const randomNumber = getRandomNumber(1, 100);
    const rightAnswer = isEven(randomNumber) ? "yes" : "no";
    return [randomNumber, rightAnswer];
}

export default () => runGame(description, getRoundData);