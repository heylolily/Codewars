// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// fairly easy coding challenge today since i mostly worked on my project, so my brain was a little fried....
function count(string) {
    return string.split('').reduce((obj,key) => {
      obj[key] = ++obj[key] || 1
      return obj
    }, {});
  }

