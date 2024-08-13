export const decode = (message) => {
  if (message === undefined)
    throw new Error()

  let resultText = message
  let x = resultText.indexOf('(')
  let y = resultText.indexOf(')')
  do {
    if (x === -1) return message
    if (resultText.substring(x + 1, y).includes('(')) {
      x = x + resultText.substring(x + 1, y).indexOf('(') + 1
    }
    resultText = resultText.substring(0, x) + resultText.substring(x + 1, y).split('').reverse().join('') + resultText.substring(y + 1)
    x = resultText.indexOf('(')
    y = resultText.indexOf(')')
  } while (x != -1 && x <= resultText.length)

  return resultText
}
