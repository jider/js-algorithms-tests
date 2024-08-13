export const calculateTime = (deliveries) => {
    if (deliveries === undefined)
        throw new Error()

    const totalTime = 7 * 60 * 60
    let elapsedTime = 0
    deliveries.forEach(delivery => {
        const deliveryDuration = delivery.split(':')
        elapsedTime += +deliveryDuration[0] * 60 * 60
        elapsedTime += +deliveryDuration[1] * 60
        elapsedTime += +deliveryDuration[2]
    });

    const timeDiff = totalTime - elapsedTime
    const hoursDiff = Math.floor(Math.abs(timeDiff) / 3600)
    const minutesDiff = Math.floor((Math.abs(timeDiff) - (hoursDiff * 3600)) / 60)
    const secondsDiff = Math.abs(timeDiff) -
        (hoursDiff * 3600) - (minutesDiff * 60)

    return (timeDiff > 0 ? '-' : '') +
        hoursDiff.toString().padStart(2, '0') + ':' + 
        minutesDiff.toString().padStart(2, '0') + ':' +
        secondsDiff.toString().padStart(2, '0')
}