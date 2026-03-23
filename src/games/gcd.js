import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const getRoundData = () => {
  const operand1 = getRandomNumber(1, 100)
  const operand2 = getRandomNumber(1, 100)

  const question = `${operand1} ${operand2}`
  const rightAnswer = String(getGcd(operand1, operand2))

  return [question, rightAnswer]
}

const sayGcd = () => runGame(description, getRoundData)
export default sayGcd
