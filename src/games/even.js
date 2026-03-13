import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const getRoundData = () => {
  const randomNumber = getRandomNumber(1, 100)
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no'
  return [randomNumber, rightAnswer]
}

export default () => runGame(description, getRoundData)
