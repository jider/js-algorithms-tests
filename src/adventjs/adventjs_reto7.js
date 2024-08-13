export const drawGift = (size, symbol) => {
    if (size === undefined || symbol === undefined)
        throw new Error()

    if (size === 0) return ''
    if (size === 1) return '#\n'

    const boxSize = size * 2 - 1;
    const gift = []
    for(let x = 0; x < size; x++) {        
        if (x === size - 1) {
            gift[x] = '#'.repeat(size)
                + symbol.repeat(size - 2)
                + '#\n'
            continue
        }

        const spaces = ' '.repeat(boxSize - size - x)
        gift[boxSize - x] = x === 0
            ? '#'.repeat(size) + '\n'
            : '#' + symbol.repeat(size - 2)
                + '#' + symbol.repeat(x - 1) + '#\n'      
                        
        gift[x] = spaces + gift[boxSize - x]
    }    

    return gift.join('')
}