import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrimeNum = (num) => {
  if (num === 2) return true
  if (num < 2) return false
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const getRoundData = () => {
  const question = getRandomNumber(0, 100)

  const rightAnswer = isPrimeNum(question) ? 'yes' : 'no'
  return [question, rightAnswer]
}

export default () => runGame(description, getRoundData)
