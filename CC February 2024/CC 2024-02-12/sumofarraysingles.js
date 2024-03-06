// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr){
    let newArr = []
    for (let item of arr) {
      arr.indexOf(item) === arr.lastIndexOf(item) ? newArr.push(item) : null
    }
    return newArr.reduce((a,b) => a+b)
  };

console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)

// by far the hardest kata i've done so far. i tried to limit how long i spent on it to not burn out, but i was wayyy too focused on getting through it. i NEEDED to T^T but i eventually got through it.

// for my solution, i decided to go with the thought process that 'if the first index and the last index of a number is the same, that means it only occurs once' so i would push that to a separate array. at the end of the loop, i would reduce the new array to get the sum of the single occurance numbers:)


// solution that is very similar to mine!!

// function repeats(arr){
//     return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
//   };

// this one is very similar to my solution, but cut down to be less cluttered