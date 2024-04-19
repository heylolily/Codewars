// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

// instead of finding the factorial and looking for trailing zeroes like that, you should know that 5 is one of the prime dividers of 10 (2 and 5). instead of finding 0s, see how many times the final number can be divided by 5, and then you will see how many times the number is divisible by 10

// my solution
function zeros (n) {
    let zeroes = 0
    let five = 5
    while (Math.floor(n/five) > 0) {
      zeroes+= Math.floor(n/five)
      five*=5
    }
    return zeroes
  }


  // voted solution, similar to mine, but moves backwards. my solution moves forward (starting from large number and dividing by 5 vs starting with 5 and going up)
function zeros (n) {
    var zs = 0;
    while(n>0){
      n=Math.floor(n/5);
      zs+=n
    }
    return zs;
  }