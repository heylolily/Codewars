// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    // find the uppercase (start of a camelCase) and then replace it with a space+the letter
    return(string.replace(/([A-Z])/g, ' $1'));
  }