





function make_avg(num1, num2, num3) {


  let total = num1 + num2 + num3;

  let avg = total / 3;

  return avg;
}

const num1 = 20;
const num2 = 30;
const num3 = 50;
const resultAvg = make_avg(num1, num2, num3);

console.log(resultAvg);
