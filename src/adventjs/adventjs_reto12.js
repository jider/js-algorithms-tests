export const checkIsValidCopy = (original, copy) => {
    if (original === undefined || copy === undefined)
        throw new Error()

    if (original === copy)
        return true

    if (original.length !== copy.length)
        return false

    const validLowercaseCharacters = '#+:. ';
    const uppercaseLettersRegex = new RegExp(/[A-Z]/)
    const lowercaseLettersRegex = new RegExp(/[a-z]/)
    
    for(let x = 0; x < original.length; x++) {
        if (copy[x] === original[x]) continue

        // Check white space
        if (original[x] === ' ') {
            if (copy[x] === original[x]) continue
            return false
        }

        // Check uppercase letters
        if (uppercaseLettersRegex.test(original[x])) {
            if (copy[x] === original[x].toLowerCase() ||
                validLowercaseCharacters.includes(copy[x])) {
                continue
            }
            return false
        }

        // Check lowercase letters or spececial chars
        if (lowercaseLettersRegex.test(original[x]) ||
            validLowercaseCharacters.includes(original[x])) {
            
            const oriIdx = validLowercaseCharacters.indexOf(original[x])
            const copyIdx = validLowercaseCharacters.indexOf(copy[x])
            if (validLowercaseCharacters.includes(copy[x]) &&
                oriIdx <= copyIdx) {
                continue
            }

            return false
        }

        if (copy[x] !== original[x]) return false
    }
    
    return true
}