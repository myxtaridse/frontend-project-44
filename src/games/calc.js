import runGame from '../index.js';

const description = "What is the result of the expression?";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1));

const getRoundData = () => {

    const operand1 = getRandomNumber(1, 100);
    const operand2 = getRandomNumber(1, 100);
    const operators = ["+", "-", "*"];
    const randomIndex = getRandomNumber(0, operators.length - 1);
    const operator = operators[randomIndex];

    const question = `${operand1} ${operator} ${operand2}`;
    let rightAnswer;
    switch (operator) {
        case "+":
            rightAnswer = operand1 + operand2;
            break;
        case "-":
            rightAnswer = operand1 - operand2;
            break;
        case "*":
            rightAnswer = operand1 * operand2;
            break;
        default:
            throw new Error(`Unknown operator '${operator}'`);
    }
    rightAnswer = String(rightAnswer);
    return [question, rightAnswer];
}

export default () => runGame(description, getRoundData);