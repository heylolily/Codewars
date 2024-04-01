// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

function countDays(d){
    // subtract today's date from the given date. this number is in milliseconds
    let diff = d.getTime() - new Date().getTime()
    // doing this equation will convert the milliseconds to days. 1000 milliseconds 360 minutes 24 hours
    let diffDays = Math.round(diff / (1000 * 3600 * 24))
    return diffDays < 0 ? `The day is in the past!` :
           diffDays === 0 ? `Today is the day!` : `${diffDays} days`
  }