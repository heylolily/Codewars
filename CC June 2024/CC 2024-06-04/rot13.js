// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
    let letters = str.split('')
    // if its between a-m, plus 13, n-z is minus 13, otherwise leave it
    letters = letters.map(x => x.match(/[a-m]/gi) ? String.fromCharCode(x.charCodeAt(0)+13) : 
                          x.match(/[n-z]/gi) ? String.fromCharCode(x.charCodeAt(0)-13) : x)
    return letters.join('')
  }

// top rated solution in codewars
function rot13(str) {
    return str.replace(/[a-z]/ig, function(x){
      return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
    });
  }