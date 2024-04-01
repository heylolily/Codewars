// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// first solution, just spread everything out step by step
var uniqueInOrder = function(iterable){
    let x = Array.isArray(iterable) ? iterable : iterable.split('')
    let arr = []
    x.map((val,ind) => {
      if (val !== x[ind+1]) { 
        arr.push(val) 
      }
    })
    return arr
  }

// second solution, use of one line using spread operator
var uniqueInOrder=function(iterable){
    // spread the variable into an array, then filter thru each value, comparing it to the one before it (in this case, index of -1 for the first argument will return true anyways)
    return [...iterable].filter((a, i) => a !== iterable[i-1])
  }