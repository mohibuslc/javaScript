//  Calculate the Array Sum ;

function arraySum(number) {
  let sum = 0;
const arrayValue=[]
  for (let i = 0; i < number.length; i++) {
    const idx = i;

    const element = number[idx];

    sum = sum + element;
      arrayValue.push(sum)
    console.log(idx, element, sum);
  
  }

  return arrayValue;
}

// function oddNumberArray(numbers) {
//   const oddNumber = [];

//   const evenNumber = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const idx = i;

//     const elements = numbers[idx];

//     if (elements % 2 === 0) {
//       console.log(idx, elements);

//       oddNumber.push(elements);
//     } else if (elements % 2 !== 0) {
//       console.log(idx, elements);

//       evenNumber.push(elements);
//     }
//   }

//   // reduce ; 

//   const evenNum = evenNumber.reduce((curr , acc)=> curr+acc, 0 );

//   const oddNum = oddNumber.reduce((curr , acc)=> curr+ acc , 0)
//   return {
//     oddNumber,

//     evenNumber,

//     evenNum, 
//     oddNum
//   };
// }

const array = [11, 22, 34, 55, 99, 102];

const result = arraySum(array);

console.log(result);
// const resultOdd = oddNumberArray(array);

// console.log(resultOdd);
