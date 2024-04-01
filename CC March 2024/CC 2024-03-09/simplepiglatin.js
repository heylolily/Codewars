// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// i realize this can also be done with replace, especially when there's a comma in the sentence, it will probably not work. i added a solution that used replace below

function pigIt(str){
    return str.split(' ').map(x => x.match(/\w/gm) ? x.slice(1) + x[0] +'ay' : x).join(' ')
  }


function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }