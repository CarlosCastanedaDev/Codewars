/* Converting a normal (12-hour) time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

You will have to define a function named "to24hourtime", and you will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time. */

function to24hourtime(hour, minute, period) {
  let str = '';
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (hour < 10 && period === 'am') {
    hour = '0' + hour;
  }
  if (period === 'pm' && hour === 12) {
    return `${hour}${minute}`;
  } else if (period === 'am' && hour === 12) {
    return `0${hour - 12}${minute}`;
  } else if (period === 'am') {
    return `${hour}${minute}`;
  } else {
    return `${hour + 12}${minute}`;
  }
}
