// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 



// my solution
function cakes(recipe, available) {
    return Object.keys(available).filter(key => Object.keys(recipe).includes(key)).length !== Object.keys(recipe).length ? [] 
    : Math.min(...Object.keys(available).filter( key => Object.keys(recipe).includes(key)).map(key => Math.floor(available[key]/recipe[key])))
}

// someones solution that was similar to mine. i like the use of reduce over filter
function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
        return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
}

// simple one liner that gets the job done as well. i like the use of map since this line kind of does filter and finds the number of times a recipe can be created at the same time. the funciton will return 0 as the number if it equals undefined.
const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)