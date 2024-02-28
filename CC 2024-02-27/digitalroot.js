// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function digitalRoot(n) {
    n = n.toString().split('').reduce((acc,x) => acc + Number(x),0)
    return n.toString().length == 1 ? n : digitalRoot(n)
  }

// this solution is crazy. its cool how creative you can get with code when you have a deeper understanding of mathematics 
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

// I figured out this by analyzing the sequence: 1 => 1 2 => 2 3 => 3 ... 9 => 9 10 => 1 11 => 2 12 => 3 ... 18 => 9 19 => 1 20 => 2 ... 27 => 9 28 => 1 29 => 2

// and so on. So it seems that the numbers are looping from 1 to 9 (basically it is 10-1 variations), meaning that you could get the modulo of the input over 9. It will produce the values 0..8, and we can fix it by adding 1.

// It's that simple. Just an orbitrary observation without any ground-deep researches and knowleges.

// https://mathworld.wolfram.com/DigitalRoot.html