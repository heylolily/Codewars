// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



function toCamelCase(str){
    return str.toLowerCase().split(/[-_]/gi).map(x=>str.indexOf(x) == 0 ? x : x.charAt(0).toUpperCase() + x.slice(1)).join('')
}


function toCamelCase(str){
    // create a regex variable that takes any - or _ PLUS the next letter
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
        // from there, itll replace the -letter or _letter into a camelcased letter
          return match.charAt(1).toUpperCase();
     });
}