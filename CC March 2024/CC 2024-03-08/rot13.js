// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// honestly, i knew that the easiest way for me to solve this would be to use a regex or have 2 strings to sift through, but i wanted to challenge myself a bit more so i tried to find a way to do it manually
function rot13(message){
    return message.split('').map(x => {
      let y = x.charCodeAt(x.toString)
      return (y >= 65 && y <=77) || (y >= 97 && y <=109) ? String.fromCharCode(y + 13) : 
      (y >= 78 && y <=90) || (y >= 110 && y <=122) ? String.fromCharCode(y - 13) :
      String.fromCharCode(y)
    }).join('')
  }

// heres a way to do it using 2 strings and indexes
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }