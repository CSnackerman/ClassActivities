// bracket and dot notation
const key = '1';
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log('the key is 1'),
};

// what will the following lines print?
obj[key]; // * guess: undefined -- actual: nothing
obj.key; // * guess: undefined -- actual: nothing
obj['key']; // * guess: undefined -- actual: nothing

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const myObj = {
  a: 1,
  b: '2',
  c: false,
  collection: ['a', 'b', 'c'],
};

// Access a value in the "collection" property
myObj.collection[0];

// Practice with nested Arrays and Objects
const keys = ['key', '1', 'method', 'favorites', 'list'];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

obj.method2 = () => 'Another method';

// Fill in your favorite movie, number and color below
obj['favorites'] = {
  movie: 'idk',
  number: 31,
  color: 'green',
};

// Add a list (a.k.a array) to an Object
obj.list = ['a', 'b', 3, 'd', ['e', 4, 5], { f: 6 }];

obj.anotherList = [3, 2, 1];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
// * expect 5 lines
// * Key is: 0 and value is: undefined
// * Key is: 1 and value is: undefined
// * Key is: 2 and value is: undefined
// * Key is: 3 and value is: undefined
// * Key is: 4 and value is: undefined
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(
  `I like the color ${obj.favorites.color} and the number ${obj.favorites.number}`
);

// Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);
