// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function add(a, b) {
  console.log(a, b);
  return a + b;
}

// invoke the function and pass in two numbers
add(2, 2);

// invoke the function and pass in more than two numbers
add(2, 2, 100);

// invoke the function and pass in only one number
add(2);

// change the function to set default values for the parameters
function add2(a = 0, b = 0) {
  console.log(a, b);
  return a + b;
}

// again, invoke the function and pass in only one number
add2(100);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function add3(a, b, ...numbers) {
  console.log(a, b, numbers);
  return a + b;
}

// again, invoke the function and pass in more than two numbers
add3(1, 2, 3, 4, 5);
