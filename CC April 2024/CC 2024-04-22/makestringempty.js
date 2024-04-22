// You are given a string "strng"

// Perform the following operation until "strng" becomes empty:

// For every alphabet character from 'a' to 'z', remove the first occurrence of that character in "strng" (if it exists).
// Example, let initially strng = "aabcbbca". We do the following operations:

// Remove the underlined characters strng = "(a)a(b)(c)bbca". The resulting string is strng = "abbca".

// Remove the underlined characters strng = "(a)(b)b(c)a". The resulting string is strng = "ba".

// Remove the underlined characters strng = "(b)(a)". The resulting string is strng = "".

// Return the value of the string strng right before applying the last operation. In the example above, answer is "ba".
// You can assume on next:

// strng will never be empty

// strng.length <= 5 * 10**5

// strng will contains only of lowercase English letters.

function lastNonEmptyString(str) {
    //     This code works, it just times out T^T
    //     let isItEmpty = str.split('').filter((x,ind) => str.indexOf(x) !== ind).join('')
    //     return isItEmpty.length === 0 ? str : lastNonEmptyString(isItEmpty)
      const stringObj = str.split('').reduceRight((obj,key) => {
        obj[key] = ++obj[key] || 1
        return obj
      }, {})
      let maxLetter = Math.max(...Object.values(stringObj))
      let lastReduction = Object.keys(stringObj)
                                .filter(x => stringObj[x] == maxLetter)
                                .reverse()
                                .join('')
      return lastReduction
      
    }
    
    // I got this code from cave.on (currently the top solution in this kata for js, but wanted to see why reduce does not work.)
    // reduceRight ensures that the char with the highest occurence count is encountered last if multiple chars have the same max count
    // reduce iterates from left to right, if multiple chars have the same count, this can lead to incorrect results
    // why is this? it is because it may not be the last non-empty string before applying the last operation.
    // pay attention to the order of the keys in the object itself vs the original string