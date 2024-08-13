/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note:
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock

Input format: hh:mm:ssAM or hh:mm:ssPM

Example:
s = '12:01:00PM'
return -> '12:01:00'

s = '12:01:00AM'
return -> '00:01:00'

*/

export function timeConversion (time) {
  const hours = time.slice(0, 2)

  return time.slice(8) === 'PM'
    ? (hours < 12 ? +hours + 12 : hours) + time.slice(2, 8)
    : (hours === '12' ? '00' : hours) + time.slice(2, 8)
}
