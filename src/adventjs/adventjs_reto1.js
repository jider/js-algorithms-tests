export const findFirstRepeated = (gifts) => {
    console.log('-----------------------------')
    console.log({gifts})
    if (!gifts) throw new Error('No Gift Ids received')
    
    const uniqueValues = new Set()
    for (let x = 0; x < gifts.length; x++) {        
        if (uniqueValues.has(gifts[x]))
            return gifts[x]
        
        uniqueValues.add(gifts[x])
    }
    
    return -1
}