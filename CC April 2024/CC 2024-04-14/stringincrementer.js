// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    // /([0-8]|\d?9+)?$/ 
    // ([0-8]|\d?9+) is a group with an OR indicator, so it can choose either the first group or second
    // [0-8] will match numbers 0-8 ONCE (there is no + or *)
    // | is the OR indicator
    // the second match is \d?9+. \d? will match ANY digit 0-9 zero-one time, and 9+ will match any number 9 one-infinite times
    // this allows us to grab 89 from foo989 or 999 from foo999, or nothing from foo
    // the $ at the end of the regex tells the match to look for the position at the end of the string
      
    return strng.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
  }