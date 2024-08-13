export const cyberReindeer = (road, time) => {
    if (road === undefined || time === undefined) throw new Error()

    const result = [road]
    let newRoad = road
    let x = 1
    let counter = 0
    while(x < time) {
        let position = x - counter

        if (x > 4) {
            newRoad = newRoad.replaceAll('|', '*')
        }

        if (position > road.length - 1) {
            result.push(newRoad)
            x++
            continue
        } 

        if (newRoad[position] === '|' && x < 5) {
            result.push(newRoad)
            counter++
            x++
            continue
        }

        let prevChar = road[position - 1]
        newRoad = newRoad.substring(0, position - 1) + (prevChar === '|' ? '*S' : '.S')  + newRoad.substring(position + 1)
        result.push(newRoad)
        
        x++
    }

    return result
}