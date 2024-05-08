// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
    return sheep.reduce((a,b) => a + (b == true ? 1 : 0),0)
  }

// another solution, but i believe is slower since it will have to go through the value twice (once to filter, and again to count the length)
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}