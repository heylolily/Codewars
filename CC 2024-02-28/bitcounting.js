// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


var countBits = function(n) {
    return n.toString(2).split('').reduce((acc,x) => acc + (x == 1 ? 1 : 0),0)
};


// this solution does the same, but i do like how they used split to split between the 0's, join it back and just count the length
countBits = n => n.toString(2).split('0').join('').length;

