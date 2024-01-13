/*

    Calculate the even & odd number 
*/

function evenOdd(num) {
  let remainder = num % 2;

  if (remainder === 0) {
    console.log("This is even Number");
  } else if (remainder != 0) {
    console.log("This is Not evem Number");
  }
}

const result = evenOdd(2001);

console.log(result);
