let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: 'myName',
  loggedIn: false,
};
// reassign x, y, and z to FALSY values
x = 0;
y = [];
z = false;

// print x, y, and z
console.log(x, y, z);

const a = 'name';
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = false; // no go
// b = false; // no go
// c = false; // no go

// using BRACKET NOTATION, assign a value to b
b[10] = 'ten';

// using DOT NOTATION, assign a PROPERTY to c
c.ten = 10;

// using DOT NOTATION, assign a METHOD to c
c.getTen = function() {
  return 10;
};

// using BRACKET NOTATION, call the method in c
c['getTen']();

// print a, b, and c
console.log(a, b, c);
