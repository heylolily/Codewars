// DESCRIPTION:
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

snail = function(array) {
    // result array for snail pattern
    let result = [];
    // 'delete' from the orignal array, move them to the new one
      while (array.length > 0) {
          // move to the right across a while array
          result = result.concat(array.shift());
          // move down the arrays, pop out the last element in each array
          for (let i = 0; i < array.length; i++) {
              result.push(array[i].pop());
          }
          // move to the left of a whole array. pop the last array in the param and reverse it
          if (array.length > 0) {
              result = result.concat(array.pop().reverse());
          }
          // move up the array, shift the first element in each one
          for (let i = array.length - 1; i >= 0; i--) {
              result.push(array[i].shift());
          }
      }
      // return the new array
      return result;
  }