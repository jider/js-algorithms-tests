export const organizeGifts = (gifts) => {
    if (gifts === undefined)
        throw new Error()
    
    let result = ''
    const items = [...gifts.matchAll(/\d+[a-z]/g)]
    for (const item of items) {
        const valueItem = item[0]
        let size = +valueItem.match(/\d+/g)[0]
        const type = valueItem.match(/[a-z]/g)[0]

        if (size >= 50) {
            const pallets = Math.floor(size / 50)            
            result += `[${type}]`.repeat(pallets)
            size -= pallets * 50
        }

        if (size >= 10) {
            const boxes = Math.floor(size / 10)
            result += `{${type}}`.repeat(boxes)
            size -= boxes * 10
        }

        if (size > 0 && size < 10)
            result += `(${type.repeat(size)})`
    }    

    return result
}