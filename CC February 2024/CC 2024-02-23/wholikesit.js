// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


// for some reason, it wasnt letting me use switch case, so i just had to use if else statements. BUT this is possible by doing switch cacses with names.length
function likes(names) {
    if (names.length === 0) {
      return `no one likes this`
    } else if (names.length === 1) {
      return `${names[0]} likes this`
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }


// i added this solution because i was very intrigued by the way it was set up. at first i didnt really understand the syntax, but it started to make sense after. the way i see it is that its going to return the item that is in the index of the Math.min part. so if the name array was 2 names, it would be the {object}[2], and then return whatever line is in the [2] property.
// im not sure how correct that is, but thats how my brain is linking them together
function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }