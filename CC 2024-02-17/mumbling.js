// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    // split the string into an array, repeating the letter x amount of times based on the index, making sure theyre all lowercase as well
    s = s.split('').map((x,ind) => x.repeat(ind+1).toLowerCase())
    // then return the string joined by '-', mkaing sure to titlecase the letters
    return s.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('-')
}

// this does the same thing, but is simplified. we split the individual letters by simultaneously titlecasing, and then repeating the letter x times, joined by '-' at the end
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}