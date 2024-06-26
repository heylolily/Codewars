// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    return num.toString()
                .split('')
                .reverse()
                .map((x,ind) => x + '0'.repeat(ind))
                .reverse()
                .filter(x => Number(x) > 0)
                .join(' + ')
  }


// similar solution
const expandedForm = n => n.toString()
  .split("")
  .reverse()
  .map( (a, i) => a * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ");

//without all the iterations (not my solution, but i did edit it a bit to my liking)
  function expandedForm(num) {
	num = String(num);
	let result = [];
	for (let i = 0; i < num.length; i++) {
        num[i] > 0 ? result.push(num[i] + "0".repeat(num.length -i -1)) : null
	}
	return result.join(" + ")
}