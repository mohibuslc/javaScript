/* calcilate factorial calculation with recuirsion   */



/* Let's walk through an example for better understanding:

factorial(5) is calculated as 5 * factorial(4)
factorial(4) is calculated as 4 * factorial(3)
factorial(3) is calculated as 3 * factorial(2)
factorial(2) is calculated as 2 * factorial(1)
factorial(1) is the base case and returns 1. */

function factorial(i) {

  if (i === 1) {

    return 1;
  }

  return i * factorial(i - 1);
}

const result = factorial(5);

console.log(result);

/*let i  = 1 ; 

while( i<5){

  console.log(i)

  

  i = i+1
 }*/
