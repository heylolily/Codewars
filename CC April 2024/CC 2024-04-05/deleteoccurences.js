// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].


// this was the thought process solution. i wrote down each step one by one as i worked it out in my head
function deleteNth(arr,n){
    let obj = {}
    let total = []
    arr.map((x,ind) => {
      if (x in obj) {
        if (obj[x] < n) {
          obj[x]+=1
          total.push(x)
        }
      } else {
        obj[x] = 1
        total.push(x)
      }
    })
    return total
  }

// i knew that there was a way to do this by filtering, as this would allow me to iterate and return an array without all the extra steps, I just needed a function that understands how to count the occurances at the same time

function deleteNth(arr,n) {
    // start with an empty obj to store numbers and count the occurrences
    let obj = {}
    // returns a filtered array, but first....
    return arr.filter(x => {
        // add 1 or input the value into the obj in not there
        obj[x] = (obj[x] || 0) + 1
        // if the value of the key is less than or equal to n, then we can add it to tthe filtered array
        return obj[x] <= n
    })
}