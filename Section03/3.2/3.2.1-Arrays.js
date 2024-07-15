// create an Array using an Array literal
const numbers = [1, 2, 3];

// access the 1st item in the Array
numbers[0];

// access the last item in the Array
numbers[2];

// print the length of the Array
console.log(numbers.length);

// use the length property to access the last item in the Array
numbers[numbers.length - 1];

// with for...of, loop over the Array, modify the value and add to a different Array
let doubled = [];
for (const n of numbers) {
  doubled.push(2 * n);
}
