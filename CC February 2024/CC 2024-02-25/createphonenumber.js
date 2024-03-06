// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


// i wanted to practice using slice. you can actually just say slice(6) for the last 4 numbers
function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
  }



// this one is nice since its super straight forward. just iterate thru the format variable and replace x with the respective number
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }