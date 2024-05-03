// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){
    const digits = String(n).split('').map(Number);
      let pivotIndex = -1;
  
      // Step 1: Find the pivot digit
      for (let i = digits.length - 2; i >= 0; i--) {
          if (digits[i] < digits[i + 1]) {
              pivotIndex = i;
              break;
          }
      }
  
      if (pivotIndex === -1) {
          return -1; // Step 3: No pivot digit found, return -1
      }
  
      // Step 4: Find the smallest digit to the right of pivot that is greater than pivot
      let nextGreaterIndex = pivotIndex + 1;
      for (let i = pivotIndex + 2; i < digits.length; i++) {
          if (digits[i] > digits[pivotIndex] && digits[i] < digits[nextGreaterIndex]) {
              nextGreaterIndex = i;
          }
      }
  
      // Step 5: Swap pivot digit with next greater digit
      [digits[pivotIndex], digits[nextGreaterIndex]] = [digits[nextGreaterIndex], digits[pivotIndex]];
  
      // Step 6: Sort the digits to the right of pivot in ascending order
      const rightDigits = digits.splice(pivotIndex + 1);
      rightDigits.sort((a, b) => a - b);
  
      // Step 7: Concatenate the digits back together to form the next bigger number
      const nextBigger = Number(digits.concat(rightDigits).join(''));
  
      return nextBigger;
  }