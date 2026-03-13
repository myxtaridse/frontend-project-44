import runGame from '../index.js';

const description = "What number is missing in the progression?";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getCurrentElement = (start, index, constNumber) => {
    return start + index * constNumber;
}

const getRoundData = () => {
    const constNumber = getRandomNumber(1, 7);
    const start = getRandomNumber(0, 30);
    const length = getRandomNumber(5, 10);
    const indexUnknownEl = getRandomNumber(0, length - 1);

    const result = [start];
    for (let i = 1; i < length; i += 1) {
        result.push(getCurrentElement(start, i, constNumber));
    }

    const rightAnswer = String(result[indexUnknownEl]);
    result[indexUnknownEl] = '..';

    const question = result.join(" ");

    return [question, rightAnswer];
}

export default () => runGame(description, getRoundData);