// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

// Let's say you start with this: "012345"

// The first thing you do is reverse it:"543210"
// Then you will take the string from the 1st position and reverse it again:"501234"
// Then you will take the string from the 2nd position and reverse it again:"504321"
// Then you will take the string from the 3rd position and reverse it again:"504123"

// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

// Input:
// A string of length 1 - 1000

// Output:
// A correctly reordered string.

function flipNumber(n) {
    n = n.split('').reverse().join('')
    for (let i = 1; i < n.length; i++) {
      n = n.slice(0,i) + n.slice(i).split('').reverse().join('')
    }
    return n
  }

console.log(flipNumber("012"),"201")
console.log(flipNumber("012345"),"504132")
console.log(flipNumber("0123456789"),"9081726354")

// SOLUTIONS I'VE LIKED

// function flipNumber (string) {
//     let out = [];
//     let chars = string.split("");
    
//     while (chars.length) {
//         out.push(chars.reverse().shift());
            // push the first character that is in the 'chars' variable after reversing it.i like the use of handling the item as a separate array and then joining it all at the end
//     }
    
//     return out.join("");
//   }

// const flipNumber = n => n.length < 2 ? n : n.slice(-1) + n[0] + flipNumber(n.slice(1, -1));

// this one uses recursion!
// it also uses a ternary operation to see if the length of the number needs to be reversed. if the number length is less than 2, it wont need to be reversed, since that just means its a single digit.
// otherwise, take the last digit (n.slice(-1)) and the first digit (n[0]) and add them together. After that, you will add the remaining digits by using recursion again, all the way down to the last digit, which will just be n (since n.length will eventually be < 2!)

// function flipNumber(n)
// {
// 	if (n.length === 1)
//   	return n;
  
//   n = n.split('').reverse().join('');
//   return n[0] + flipNumber(n.substr(1));
// }

// this is another example of using recursion to solve the problem 