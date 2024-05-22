// Based off the game Counter-Strike

// The bomb has been planted and you are the last CT (Counter Terrorist) alive

// You need to defuse the bomb in time!

// Task:

// Given a matrix m and an integer time representing the seconds left before the bomb detonates, determine if it is possible to defuse the bomb in time. The time limit is inclusive.

// In the matrix m:

// "CT" represents the counter terrorist
// "B" represents the bomb
// "K" represents the kit
// "0" represents empty space
// The defuse kit may or may not be present in the matrix

// You can defuse the bomb in 2 ways:

// If you defuse the bomb without the defuse kit, it will cost 10 seconds
// If you defuse the bomb with the defuse kit, it will cost only 5 seconds
// Each move the CT makes in any direction costs 1 second

// The CT can move diagonally, horizontally and vertically.

function bombHasBeenPlanted(map, time) {
    let bombxy = []
    let ctxy = []
    let kitxy = []
    // find thex for the variables
    // find the y for the variables
    for (let arr of map) {
      if (arr.includes('CT')) {
        ctxy[0] = map.indexOf(arr)
        ctxy[1] = arr.indexOf('CT')
      } 
      if (arr.includes('B')) {
        bombxy[0] = map.indexOf(arr)
        bombxy[1] = arr.indexOf('B')
      }
      if (arr.includes('K')) {
        kitxy[0] = map.indexOf(arr)
        kitxy[1] = arr.indexOf('K')
      }
    }
    
    
    let defaultDistance = [Math.abs(ctxy[0] - bombxy[0]),Math.abs(ctxy[1] - bombxy[1])]
    let defuseTime = Math.max(...defaultDistance)+10
    
    // if there is a kit available, see if the defuse time is shorter than without one
    if (kitxy.length > 0) {
      // how many seconds does it take to get to the kit FROM CT position
      let kitCtDistanceTime = Math.max(Math.abs(ctxy[0] - kitxy[0]),Math.abs(ctxy[1] - kitxy[1]))
      // how many seconds does it take to get to the bomb FROM the kit
      let kitBombDistanceTime = Math.max(Math.abs(kitxy[0] - bombxy[0]),Math.abs(kitxy[1] - bombxy[1]))
      // how long will it take to defuse with the kit?
      let kitDefuse = kitCtDistanceTime + kitBombDistanceTime + 5
  
      // if kit defuse time is shorter than the default defuse time, replace
      if (kitDefuse < defuseTime) {
        defuseTime = kitDefuse
      }
    }
    return defuseTime <= time
  }


// second solution, i like the use of nesting functions since they do the same thing
function bombHasBeenPlanted(map, time) {
  
    const ctPos = getPos(map, "CT")
    const bombPos = getPos(map, "B")
    const kitPos = getPos(map, "K")
    
    const ctToBomb = distance(ctPos, bombPos)
    const ctToKit = distance(ctPos, kitPos)
    const kitToBomb = distance(kitPos, bombPos)
    
    const directTime = ctToBomb + 10
    const kitTime = ctToKit + kitToBomb + 5
    
    const minTime = Math.min(directTime, kitTime)
    
    return minTime <= time
    
  }
  
  function getPos(map, t) {
    for(let y = 0; y < map.length; y++) {
      for(let x = 0; x < map[y].length; x++) {
        if(map[y][x]===t) {
          return [x,y]
        }
      } 
    }
    return null
  }
  
  function distance(a, b) {
    if(!a || !b) return Infinity
    const xDistance = Math.abs(b[0] - a[0])
    const yDistance = Math.abs(b[1] - a[1])
    return Math.max(xDistance, yDistance)
  }