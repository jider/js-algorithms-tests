import { describe, expect, it } from 'vitest'

const maxGifts = (houses) => {
  console.log('-----------------')
  console.log({ houses })

  if (houses === undefined)
    throw new Error()

  if (houses.length < 3)
    return Math.max(0, Math.max(...houses))

  // Sumar iteración desde el 2 a houses[0]
  // Sumar iteración desde el 3 a houses[0] y houses[1]
  // let giftsValues = [0, 0]
  // let idx = 2
  // while (idx < houses.length) {
  //     giftsValues[idx % 2] += houses[idx]
  //     idx++
  // }

  // console.log({giftsValues})
  // let maxGiftsValue = Math.max(
  //     houses[0] + giftsValues[0], // iteración desde el 2 a houses[0]
  //     houses[0] + giftsValues[1], // iteración desde el 3 a houses[0]
  //     houses[1] + giftsValues[1]  // iteración desde el 3 a houses[1]
  // )

  let maxGiftsValue = 0
  const valuesToTest = [houses[0], houses[1]]
  for (let x = 0; x < valuesToTest.length; x++) {
    let giftsValues = [valuesToTest[x], valuesToTest[x]]
    let idx = x + 2
    while (idx < houses.length) {
      giftsValues[idx % 2] += houses[idx]
      idx++
    }
    console.log(valuesToTest[x], { giftsValues })
    maxGiftsValue = Math.max(maxGiftsValue, Math.max(...giftsValues))
    console.log({ maxGiftsValue })
  }

  // const housesToCheck = Math.ceil(houses.length / 2)
  // let maxValueTested = -1
  // let maxGiftsValue = 0
  // for(let x = 0; x < housesToCheck; x++) {
  //     if (houses[x] > maxValueTested) {
  //         maxValueTested = houses[x]

  //         console.log({maxValueTested, x})

  //         let idx = x + 2
  //         let giftsValues = [houses[x], houses[x]]
  //         while (idx < houses.length) {
  //             giftsValues[idx % 2] += houses[idx]
  //             idx++
  //         }
  //         console.log({giftsValues})
  //         maxGiftsValue = Math.max(maxGiftsValue, Math.max(...giftsValues))
  //         console.log({maxGiftsValue})
  //     }
  // }

  return maxGiftsValue
}

describe('AdventJs - Reto 14 - Evita la alarma', () => {
  it('maxGifts should be a function', () => {
    expect(typeof maxGifts === 'function').toBe(true)
  })

  it('maxGifts should receive a parameter', () => {
    expect(() => maxGifts()).toThrowError()
  })

  it('if houses has less than 3 values, the result should be the bigest value', () => {
    expect(maxGifts([])).toBe(0)
    expect(maxGifts([5])).toBe(5)
    expect(maxGifts([5, 1])).toBe(5)
    expect(maxGifts([5, 10])).toBe(10)
  })

  it('if houses is an array of values, the result should be the bigest combination of non consecutive values', () => {
    expect(maxGifts([2, 4, 2])).toBe(4)
    expect(maxGifts([5, 1, 1, 5])).toBe(10)
    expect(maxGifts([0, 0, 0, 0, 1])).toBe(1)
    expect(maxGifts([4, 1, 1, 4, 2, 1])).toBe(9)
  })
})
