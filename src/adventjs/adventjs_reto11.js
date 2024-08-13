export const getIndexsForPalindrome = (word) => {
    if (!word)
        throw new Error()

    if (word.length === 1) return []
    if (word.length < 4) {
        return word[0] === word[word.length - 1] ? [] : null
    }

    let wordCopy = word.split('')
    let result = []
    let x = 0
    let y = word.length - 1

    while(x < y) {
        if (wordCopy[x] !== wordCopy[y]) break
        x++
        y--
    }
    let swapIdx = x
    let counter = swapIdx

    while(x < y) {
        if (wordCopy[x] !== wordCopy[y]) {
            wordCopy = word.split('')
            x = 0
            y = word.length - 1
            counter += 1 

            if (counter > y) {
                swapIdx++
                if (swapIdx >= y) return null

                counter = swapIdx + 1
            }                

            // Swap characters            
            if (wordCopy[swapIdx] !== wordCopy[counter]) {
                const tempChar = wordCopy[swapIdx]
                wordCopy[swapIdx] = wordCopy[counter]
                wordCopy[counter] = tempChar
            }

            result = [swapIdx, counter]

            continue
        } 

        x++
        y--
    }

    return result
}
