// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(A) {
    let B = A.reduce(function(obj, b) {
      obj[b] = ++obj[b] || 1;
      return obj;
    }, {});
    return Object.keys(B).reduce((acc,property) => acc + (B[property] % 2 == 1 ? Number(property) : 0),0)
    
  // this was one of the methods i used during my attempt. i was able to change it up a bit into the line above ^
  //   for (const property in B) {
  //     console.log(B[property] % 2)
  //     B[property] % 2 == 1 ? Number(property) : null
  //   }
}



// this was the top solution for the question. i think its amazing and after reading how to understand the code, it made me realize theres still so much to learn. I really like how challenging this solution is. its such a simple line for such a complex question. it blows my solution out of the water haha
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// const findOdd: This line declares a constant variable findOdd and assigns it an arrow function. The function takes one parameter, xs, which represents the array of integers.

// (a, b) => a ^ b: This part of the code is an arrow function used as a callback for the reduce method. The ^ operator in JavaScript performs a bitwise XOR operation. XOR (exclusive OR) returns 1 for bits that are different and 0 for bits that are the same. For example, 1 ^ 1 results in 0, and 1 ^ 0 results in 1.

// xs.reduce((a, b) => a ^ b): Here, the reduce method is used on the input array xs. The reduce method takes a callback function that is applied to each element of the array. In this case, the callback function (a, b) => a ^ b calculates the XOR of the accumulated result a and the current element b. This operation is performed iteratively over the elements of the array until a single result is obtained.

// The XOR operation has a special property: if you XOR a number with itself an odd number of times, the result will be the number itself. If you XOR a number with itself an even number of times, the result will be 0. Since all numbers in the array appear even times except for one, the XOR operation will eventually leave you with the number that appears an odd number of times.

// In summary, this code calculates the XOR of all the elements in the array, effectively finding the number that appears an odd number of times, and returns that number as the result of the findOdd function.