/* Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time. */

function elapsedSeconds(startDate, endDate){
  let startMin = startDate.getMinutes()
  let endMin = endDate.getMinutes()
  let startSec = startDate.getSeconds()
  let endSec = endDate.getSeconds()
  return ((endMin - startMin) * 60) + endSec - startSec
}