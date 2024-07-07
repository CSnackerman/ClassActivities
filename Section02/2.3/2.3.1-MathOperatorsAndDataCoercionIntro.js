// What should we expect to print?

// Basic Math
console.log(1 + 2 * 3);
console.log('expect', '7');
console.log((1 + 2) * 3);
console.log('expect', '9');
console.log(40 / 5 - 2 ** 3);
console.log('expect', '0');
console.log(6 % 2);
console.log('expect', '0');

// Adding/Concatenating Strings
console.log('10' + '5');
console.log('expect', '105');
console.log('Hello ' + 'world');
console.log('expect', 'Hello world');

// Data Coercion
console.log('2' + 2);
console.log('expect', '22');
console.log(2 + true);
console.log('expect', '3');
console.log(true + true + 'true' + 'false');
console.log('expect', '2truefalse');
console.log(1 + 1 + '2' + '3');
console.log('expect', '223');
