// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter(item => Number.isInteger(item))
  }

console.log(filter_list([1,2,3,4,'a','b','c']), [1,2,3,4])
console.log(filter_list([1,9,'test',34,'10',6,0,'aa']), [1,9,34,6,0])

// an alternative using filter and typeof

function filter_list2(l) {
    return l.filter(element => typeof element === 'number')
  }

console.log(filter_list2([1,4,24,'test','99']),[1,4,24])  


