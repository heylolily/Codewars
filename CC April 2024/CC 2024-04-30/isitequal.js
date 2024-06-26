// Task
// Create (a) method(s) eqAll that determines if all elements of a list are equal.
// list can be a String or an Array; return value is a Boolean.
// Your method(s) should not be enumerable. Equality should be strict (===).

// Examples
// "aaaaa".eqAll() => true
// "abcde".eqAll() => false
// [0,0,0].eqAll() => true
// [0,1,2].eqAll() => false

// "".eqAll() => true
// [].eqAll() => true
// Bonus points
// Bonus points for supporting any (finite) iterable!
// This will be tested with Sets and custom Objects.
// Note that these may lack a length property, and may not be indexable into.

Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
    return this.split('').every(x => x === this[0])
  } } );
  
  Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
    return this.every(x => x === this[0]);
  } } );



// secondary solution i liked
Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
    // turn a string into an array, then go to the below funtion
    return [...this].eqAll();
  }});
  
  Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
    return this.every(i => i === this[0]);
  }});