// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89=8^1+9&2


// Task
// We need a function to collect these numbers, that may receive two integers 
// 𝑎
// a, 
// 𝑏
// b that defines the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []


function sumDigPow(a, b) {
    // this is the result array
    let arr = []
    for (let i = a; i < b; i++) {
      // separate each digit in i
      let nums = i.toString().split('')
      // raise each digit to the indexth+1 power, then add all together
      let total = nums.reduce((a,b, index) => (Number(b)**(index+1))+a, 0)
      // if the total is equal to i, that means it fits the property, so add to array
      if (i == total) {
        arr.push(i)
      }
    }
    // return the result array
    return arr
  
  }

// similar solution, but im not the biggest fan of nesting loops in each other
function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
      var sum = 0;
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) arr.push(i);
      }
    }
    return arr;
  }