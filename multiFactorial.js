// Multifactorial calculation

function MultiFactorial(numbers) {
  let multiResult = 1;
  let multiArray = []

  for (let i = 1; i <=numbers; i++) {

    let element = i ; 

    
    multiResult = multiResult * element;

    console.log(i, multiResult  );
    multiArray.push(multiResult)
  }
  return {
    multiArray , 
    
  } ; 

}

const result = MultiFactorial(9); 


console.log(result)