// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// i recycled code from a previous challenge where i make an object 
function scramble(str1, str2) {
    str1 = str1.split('').reduce((obj,key) => {
      obj[key] = ++obj[key] || 1
      return obj
    }, {})
    // this code will subtract one for each letter that comes in, and will return true if EVERY variable is counted, but if not, it will return false
    return str2.split('').every(x => str1[x]--)
  }