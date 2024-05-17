// DESCRIPTION:
// Your task is to construct a building which will be a pile of n cubes. 
// The cube at the bottom will have a volume of n^3, and the cube above will be (n-1)^3, and so on until the top cube is 1^3

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// i actually came up with 2 solutions for this

function findNb(m) {
    // FOR LOOP METHOD
  //   let pile = 0
  //     for (let i = 1; m > 0; i++) {
  //       m -= Math.pow(i,3)
  //       pile++
  //       if (m < 0) {
  //         return -1
  //       }
  //     }
  //   return pile
    
    // WHILE LOOP METHOD
    let pile = 0
    let volume = 0
    while (volume < m) {
      pile++
      volume += Math.pow(pile,3)
    }
    return volume === m ? pile : -1
  }