// factorial While loops using "decrementway calculate the factorial calculation ";




function factWhile(numbers) {
  let i = numbers;

  let result = 1;

  let array = [];

  while (i >= 1) {
    result = result * i;

    i--;
array.push(i , result)
    console.log(i, result);
  }
  return array;
}

const result = factWhile(7);

console.log(result);
