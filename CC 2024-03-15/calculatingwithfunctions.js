// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//my solution
function zero(func) { return func ? func(0) : 0 }
function one(func) { return func ? func(1) : 1 }
function two(func) { return func ? func(2) : 2 }
function three(func) { return func ? func(3) : 3 }
function four(func) { return func ? func(4) : 4 }
function five(func) { return func ? func(5) : 5 }
function six(func) { return func ? func(6) : 6 }
function seven(func) { return func ? func(7) : 7 }
function eight(func) { return func ? func(8) : 8 }
function nine(func) { return func ? func(9) : 9 }

function plus(y) { return function(x) { return x + y } }
function minus(y) { return function(x) { return x - y } }
function times(y) { return function(x) { return x * y } }
function dividedBy(y) { return function(x) { return Math.trunc( x / y ) } }

// start from inner bracket to outer. five(plus(two())) would start with two() which does not have a function so it returns 2
// then is plus(2) which would return a new function. this function is "function(x) {return x + 2}". in this case, y = 2 since thats the argument we put in
// last is five(function(x) {return x+2}) which does contain a function, so it will execute func(5) or function(5) { return 5 + 2 }


