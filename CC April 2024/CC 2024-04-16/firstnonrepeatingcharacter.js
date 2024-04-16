// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// this one was incredibly hard. i just wrote each step one by one
function firstNonRepeatingLetter(s) {
    if (s.length == 0) {
      return ''
    }
    let index = -1
    let answer = ''
    for (let i of s) {
      if (s.toLowerCase().split(i.toLowerCase()).length -1 === 1) {
        answer = i
        break
      } else {
        index += 1
      }
    }
    if (index === s.length-1) {
      return ''
    } else {
      return answer
    }
  }

// someone else's code that is a lot more condensed than mine. idk why i didnt think about using indexOf and lastIndexOf...i always forget it exists
function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }

// usage of regex
function firstNonRepeatingLetter(s) {
    for(var i in s) {
        // makes the current iteration the regex, and ignores the casing with 'gi' flags
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }