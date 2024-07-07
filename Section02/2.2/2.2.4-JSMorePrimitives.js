// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let s = 'a string';
let n = 100;
let b = false;
let u;
let l = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof s);
console.log(typeof n);
console.log(typeof b);
console.log(typeof u);
console.log(typeof l);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
const t = `Here's ${s} worth $${n}.`;

// reassign the value of the variable that references "null"
l = 0;

// print the value and its type
console.log(l, typeof l);

// print a variable that causes a ReferenceError
console.log(dne);

// alter the previous line to no longer cause a ReferenceError
let dne;
console.log(dne);
