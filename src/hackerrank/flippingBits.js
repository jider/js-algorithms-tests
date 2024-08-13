/*
You will be given a list of 32 bit unsigned integers.
Flip all the bits (1 -> 0 and  0 -> 1) and return the result as an unsigned integer.

Example:
n -> 9
00000000000000000000000000001001
11111111111111111111111111110110
return -> 4294967286
 */

export function flippingBits (n) {
  const nIn32Bits = (n >>> 0).toString(2).padStart(32, '0')

  let result = ''
  for (const x of nIn32Bits) {
    result += x === '0' ? '1' : '0'
  }

  return parseInt(result, 2)
}

/* Tricky solution */
// export function flippingBits (n) {
//   const maxValue = Math.pow(2, 32) - 1
//   return maxValue - n
// }
