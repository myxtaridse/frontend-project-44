import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = "What is the result of the expression?";

const operators = ["+", "-", "*"];

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        default:
            throw new Error(`Unknown operator '${operator}'!`);
    }
}

const getRoundData = () => {
    const operand1 = getRandomNumber(1, 100);
    const operand2 = getRandomNumber(1, 100);
    const randomIndex = getRandomNumber(0, operators.length - 1);
    const operator = operators[randomIndex];

    const question = `${operand1} ${operator} ${operand2}`;
    const rightAnswer = String(calculate(operand1, operand2, operator));

    return [question, rightAnswer];
}

export default () => runGame(description, getRoundData);