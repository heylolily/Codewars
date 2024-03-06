// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)



// the commented out section is my first attempt. i realized that there should be an easier way to filter between evens and odds
// in the instructions, it states that only ONE integer will be an outlier, so you can just return the [0 index]
function findOutlier(integers){
    let evens = integers.filter(x=> x % 2 == 0)
    let odds = integers.filter(x=> x % 2 !== 0)
    return evens.length == 1 ? evens[0] : odds[0]
    
    
  //   let ind = [0,0]
  //   let nums = [0,0]
    
    
  //   integers.map(function(x) {
  //     if (x % 2 == 0) {
  //       ind[0]++
  //       nums[0]+=x
  //     } else {
  //       ind[1]++
  //       nums[1]+=x
  //     }
  //   })
  //   return nums[ind.indexOf(Math.min(...ind))]
  }