// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr.filter(x=>x>0).length > 0 ? arr.filter(x=>x>0).reduce((a,b)=>a+b) : 0
}

// same function, just skipping the step to check length. you reduce right away and check if the value is over 0 at the same time. the initial value will be 0 so it returns 0 if its empty

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}