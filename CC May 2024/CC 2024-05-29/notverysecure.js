// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
    return string.length > 0 ? string.split('').every(x => /[a-zA-Z0-9]/g.test(x)) : false
  }


// use of regex and test
let alphanumeric = s => /^[a-z\d]+$/i.test(s);