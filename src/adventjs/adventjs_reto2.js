export const manufacture = (gifts, materials) => {
    if (!gifts || materials === undefined)
        throw new Error('No Gifts and Materials received')

    if (gifts.length === 0 || !materials)
        return []

    return gifts.reduce((prev, gift) => {
        const parsedGift = [...(new Set(gift))]
        console.log({parsedGift})
        for(let x=0; x < parsedGift.length; x++) {
            if (!materials.includes(gift[x]))
                return prev;
        }
        prev.push(gift);
        return prev;
    }, [])
}