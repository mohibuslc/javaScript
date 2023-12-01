// oddNumber and Even number find out from Array , Now Even Number and Odd number put two in saparate Array .

function claculation(number) {
  let evenNumber = [];

  let oddNumber = [];

  for (let i = 0; i < number.length; i++) {
    let idx = i;

    const element = number[i];

    if (element % 2 === 0) {
      console.log(idx, element);

      evenNumber.push(element)
    } else if (element % 2 !== 0) {
      console.log(idx, element);
      oddNumber.push(element)
    }
  }

  return{ evenNumber,oddNumber }
}

const valuOfarray = [22, 33, 44, 99, 190, 290];

const result = claculation(valuOfarray);

console.log(result)