// In this Kata, we will calculate the minimum positive number that is not a possible sum from a list of positive integers.

// solve([1,2,8,7]) = 4 => we can get 1, 2, 3 (from 1+2), but we cannot get 4. 4 is the minimum number not possible from the list. 
// solve([4,1,2,3,12]) = 11. We can get 1, 2, 3, 4, 4+1=5, 4+2=6,4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10. But not 11. 
// solve([2,3,2,3,4,2,12,3]) = 1. We cannot get 1.

function solve(arr) {
    // sort the array from least to greatest
      arr.sort((a, b) => a - b)
      let minimum = 1
      // go thru each number in the array
      for (const num of arr) {
        // if the num is greater than the minimum, that means the minimum cannot be made
        // for example, the minimum 1 cannot be made if the lowest number in the array is 2
          if (num > minimum) {
              break
          }
        // otherwise, we'll add that number to the minimum and go to the next number in the array
          minimum += num
      }
      return minimum;
  }


  