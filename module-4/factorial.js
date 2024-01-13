/*  Calculate factorial   */

function calFactorial(numbers) {
    
  let result = 1;

  let valueOffactorial = [];

  for (let i = 1; i <= numbers; i++) {
    result = result * i;

    valueOffactorial.push(i);
  }
  return {
    result,
    valueOffactorial,
  };
}

const result = calFactorial(5);

console.log("factorial value is :", result);
