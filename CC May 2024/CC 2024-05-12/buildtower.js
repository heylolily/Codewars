// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    // append to an array for the answer
    let result = []
    // start a loop
    for (let i=1;i <= nFloors; i++) {
      // make the spaces
      let spaces = ' '.repeat(nFloors-i)
      // make the stars. each level adds 2 stars, but must be odd, so subtract 1
      let stars = '*'.repeat(i*2-1)
      // push the spaces/stars into the result array
      result.push(spaces+stars+spaces)
    }
    // return array
    return result
  }