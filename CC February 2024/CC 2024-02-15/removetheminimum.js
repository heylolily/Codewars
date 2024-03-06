// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    if (numbers.length < 2) {
      return []
    } else {
      let minIndex = numbers.indexOf(Math.min(...numbers))
      let arr = [...numbers]
      arr.splice(minIndex,1)
      return arr
    }
}

// alternative solution. simplified the first solution by removing the need to manually make a new array
// if the array length is 1 or 0, it would return an empty array regardless, since you still technically remove the minimum number

function removeSmallest(numbers) {
    // Math.min will allow us to iterate through numbers to find the minimum value. Using the apply method allows us to iterate through the variable numbers without having to use the spread operator, with 'this' being set to 0 basically.
    // this line is also faster than using the spread operator Math.min(...numbers)
    const min = Math.min.apply(this,numbers);
    // filter takes 3 variables, num is the element we are iterating over, idx is the index of that number, and arr is the original array we are looking at. Filter is also used as it will not mutate the original. In this case, if the num we are looking at is not the index of the min value from the first line, then we don't filter it out.
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}