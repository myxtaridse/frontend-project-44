import runGame from '../index.js';

const description = "Find the greatest common divisor of given numbers.";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1));

const getGcd = (point1, point2) => {
    let a = Math.abs(point1);
    let b = Math.abs(point2);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const getRoundData = () => {
    const operand1 = getRandomNumber(1, 100);
    const operand2 = getRandomNumber(1, 100);
    const rightAnswer = String(getGcd(operand1, operand2));

    const question = `${operand1} ${operand2}`;

    return [question, rightAnswer];
}

export default () => runGame(description, getRoundData);