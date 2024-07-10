// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}

/* returns void/undefined */

// change the function above to return a value
function myNumberFunction2() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}

/**
 * This is neither short-circuiting nor short-circuit evaluation.
 *    -Col Ackerman
 */

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return 'Zap! - Short Circuited!';
  console.log(
    'This will never print because it is after the return statement.'
  );
}

// ? will the following function short circuit?
// No becuase neither logical AND && nor logical OR || is used below.
let height = 50;
function checkCircusRides() {
  if (height < 48) {
    console.log('Take a ride on the carousel!');
    return; // this is just an early return / guard clause -- not a short circuit
  }
  if (height < 60) {
    console.log('Try the bumper cars!');
    return; // same here
  }
  console.log('Enjoy the roller coaster!');
}

// change the function above to use short circuiting
