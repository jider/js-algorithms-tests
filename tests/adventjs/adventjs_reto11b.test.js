import { describe, expect, it } from "vitest";

const getIndexsForPalindrome = (word) => {
    console.log({word})
    console.log('---------------')

    if (!word)
        throw new Error()

    let wordCopy = word.split('')
    let result = []
    let x = 0
    let y = word.length - 1
    let wordMiddleSize = Math.ceil(word.length / 2)
    console.log({wordMiddleSize})

    while(x < y) {
        console.log(x, wordCopy[x])
        console.log(y, wordCopy[y])

        // if (swapIdx && wordCopy[x] === wordCopy[y]) {
        //     result = [swapIdx, y]
        //     x = swapIdx
        // }

        if (wordCopy[x] !== wordCopy[y]) {
            const idx = wordCopy.slice(x, wordMiddleSize).findIndex(c => c === wordCopy[y]) + x
            if (idx < 0) return null

            console.log({idx})
            const tempChar = wordCopy[x]
            wordCopy[x] = wordCopy[idx]
            wordCopy[idx] = tempChar
            result = [x, idx]
            console.log({wordCopy})
            console.log({result})
        }

        x++
        y--
    }

    return result
}

describe('AdventJs - Reto 11 - Los elfos estudiosos', () => {
    it('getIndexsForPalindrome is a function', () => {
        expect(typeof getIndexsForPalindrome === 'function').toBe(true)
    })

    it('getIndexsForPalindrome receives one parameter', () => {
        expect(() => getIndexsForPalindrome()).toThrowError()
        expect(() => getIndexsForPalindrome('')).toThrowError()
    })    

    it('If the word is a palindrome, the result is an empty array "[]"', () => {
        expect(getIndexsForPalindrome('aa')).toEqual([])
        expect(getIndexsForPalindrome('anna')).toEqual([])        
    })

    it('If the word is not a palindrome, the result should be "null"', () => {
        expect(getIndexsForPalindrome('ab')).toBe(null)
        expect(getIndexsForPalindrome('abac')).toBe(null)        
    })

    it('If the word can be a palindrome changing the letters in the word, the result should be the indexes of the changed letters', () => {
        expect(getIndexsForPalindrome('abab')).toEqual([0,1])
        expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
        expect(getIndexsForPalindrome('caababa')).toEqual([1, 3])
    })
})