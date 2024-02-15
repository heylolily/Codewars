// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    // splitting the string into an array with each character lowercase (since case does not matter)
    let iso = str.toLowerCase().split('')
    // creating another array, but using the Set method to remove any duplicates
    let uniq = [...new Set(str.toLowerCase().split(''))]
    // if theres no dupes, then the length of both arrays should be equal, if not then it is not an isogram
    return iso.length === uniq.length ? true : false
}

// a simplified version of the same code

function isIsogram(str){
    // basically the same principle, but you dont have to make an array for the default string. 
    // the length will be the same. size will return the number of elements in the set. 
	return new Set(str.toLowerCase()).size == str.length;
}