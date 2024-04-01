// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// did this while working. i wanted to find a way to filter the 0's and move them to the end simultaneously
function moveZeros(arr) {
    let filtered = arr.filter(x => x !== 0)
    let zeros = '0'.repeat(arr.length - filtered.length).split('').map(x => Number(x))
    return filtered.concat(zeros)
  
  }


// this is an alternative solution, but not very efficient as it loops through the array twice

// function moveZeros(arr) {
//     return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
// }