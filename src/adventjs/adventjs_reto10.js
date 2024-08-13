export const createChristmasTree = (ornaments, height) => {
    if (!ornaments || height === undefined)
        throw new Error()

    if (height === 0)
        return '|\n'

    let result = ''
    let ornamentIdx = 0
    for(let h = 0; h < height; h++) {
        let treeLayer = ''
        for (let x = 0; x < h + 1; x++) {            
            treeLayer += x === 0
                ? ornaments[ornamentIdx % ornaments.length]
                : ` ${ornaments[ornamentIdx % ornaments.length]}`

            ornamentIdx++
        }
        result += ' '.repeat(height - h - 1) + treeLayer + '\n'
    }

    result += ' '.repeat(height - 1) + '|\n'

    return result
}