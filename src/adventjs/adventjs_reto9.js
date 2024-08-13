export const adjustLights = (lights) => {
    if (lights === undefined)
        throw new Error()

    if (lights.length <= 1)
        return 0

    let result = [0, 0]
    let lightsCopy = [[...lights], [...lights.reverse()]]

    lightsCopy.forEach((lightsToCheck, lightsIdx) => {
        for(let x = 0; x < lightsToCheck.length; x++) {
            if (lightsToCheck[x] === lightsToCheck[x + 1]) {
                lightsToCheck[x + 1] = lightsToCheck[x] === '🟢' ? '🔴' : '🟢'
                result[lightsIdx]++
            }
        }
    })

    return Math.min(result[0], result[1])
}
