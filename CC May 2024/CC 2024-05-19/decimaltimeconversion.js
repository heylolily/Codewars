// Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.

// One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.
// Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.
// The terms "normal" and "standard" time are considered synonymous in this kata, just like the terms "decimal" and "industrial" time.
// toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
// toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
// There will be no seconds in the tests. We'll neglect them for the purpose of this kata.

// Flavor text (click to expand)

// Examples:
// toIndustrial(1) => 0.02
// toIndustrial("1:45") => 1.75
// toNormal(0.33) => "0:20"

function toIndustrial(time){
    if (!Number.isInteger(time)) {
      let hrmin = time.split(':')
      time = (Number(hrmin[0])*60) + (Number(hrmin[1]))
    }
    let num = (time/36)*6/10
    return Math.round(num * 100) / 100
  }
  function toNormal(time){
    let total = time*60
    let hours = Math.floor(total/60)
    let mins = Math.round(total%60)
    if (mins > 59) {
      hours++
      mins = 0
    } 
    if (mins < 10) {
      mins = '0'+mins
    }
    return `${hours}:${mins}`
  }
  
  
  
  function toIndustrial(time){
    if (!Number.isInteger(time)) {
      let hrmin = time.split(':')
      let hours = Number(hrmin[0])*60
      let mins = Number(hrmin[1])
      time = hours+mins
    }
    let num = (time/36)*6/10
    return Math.round(num * 100) / 100
  }


// second solution, top rated in codewars
// not really sure if i like this version
function toIndustrial(time){
    return typeof time === "number" ? +(time / 60).toFixed(2) : +((Math.trunc(time.replace(":", ".")) + (time.replace(":", ".") % 1) / 0.6)).toFixed(2);
  }
  
  function toNormal(time){
    let hours = Math.trunc(Math.round(time * 60) / 60);
    let minutes = Math.round(time * 60) % 60;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  }