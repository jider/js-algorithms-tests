export const maxDistance = (movements) => {
    if (movements === undefined) throw new Error()

    const data = movements.split('')

    let right = data.filter(char => char === '>').length
    let left = data.filter(char => char === '<').length
    let wildcard = movements.length - right - left

    return Math.max(right,left) + wildcard - Math.min(right, left);
}