import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const description = 'What number is missing in the progression?'

const getCurrentElement = (start, index, step) => {
  return start + index * step
}

const getRoundData = () => {
  const step = getRandomNumber(1, 7)
  const start = getRandomNumber(0, 30)
  const length = getRandomNumber(6, 10)
  const indexUnknownEl = getRandomNumber(0, length - 1)

  const result = [start]
  for (let i = 1; i < length; i += 1) {
    result.push(getCurrentElement(start, i, step))
  }

  const rightAnswer = String(result[indexUnknownEl])
  result[indexUnknownEl] = '..'

  const question = result.join(' ')

  return [question, rightAnswer]
}

const sayProgression = () => runGame(description, getRoundData)
export default sayProgression
