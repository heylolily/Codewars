// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

// Example
// For value = 15, the output should be 20

// For value = 1234, the output should be 1000.

// 1234 -> 1230 -> 1200 -> 1000.

// For value = 1445, the output should be 2000.

// 1445 -> 1450 -> 1500 -> 2000.

// Input/Output
// [input] integer value

// A positive integer.

// Constraints: 1 ≤ value ≤ 108

// [output] an integer

// The rounded number.

function rounders(value) {
    let digit = 1
    if (value % Math.pow(10,digit)>=5) {
        value += Math.pow(10,digit)
    }
    // round the last number up or down
    value -= (value % Math.pow(10,digit))
    digit += 1
    while (value > Math.pow(10,digit)) {
        if (value % Math.pow(10,digit) >= 5 * Math.pow(10,digit-1)) {
            value += Math.pow(10,digit)
          }
          // if the next tens spot is greater than 50/500/etc, then we round up
        if (value>= Math.pow(10,digit)) {
            value -= (value % Math.pow(10,digit))
          }
          // otherwise, round down
        digit += 1
        // keep continuing this loop until the value is less than the power
    }   
    return value
}
// this is basically the long written version of recursion. i cant believe i fried my brain this hard, when the following solution existed


// this uses recursion to quickly see if the value is less than 10, and if it isnt, go through the function again but with a 10th of the original value, and e will add the extra 0 at the end.
function rounders(value, e=1) {
    return value<10 ? value*e : rounders(Math.round(value/10), e*10)
    // since the e value goes up by 10th powers (starts at 1, then 10, 100, etc), i don't have to worry about the powers. i can focus on seeing if the value is less than 10. using recursion will also help with rounding the last number up or down, as in this case, the last number becomes a decimal
}