// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    let arr = words.split(' ')
    let answer = []
    arr.forEach(x=> {
      let letters = x.split('')
      let number = letters.find(x => parseInt(x))
      answer.push([x, number])
    })
    return answer.sort((a,b) => a[1]-b[1]).map(x => x.slice(0,1)).join(' ')
  }


 // second solution, i like the idea of condensing it 
  function order(words){
  
    return words.split(' ').sort(function(a, b){
      // use of regex to find digit
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }    