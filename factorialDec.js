// Factorial Calculation decrement way ; 


function facDec(numbers){


    let result = 1 ; 

    for(let i = numbers; i>=1 ; i--){

        result = result * i ; 

        console.log(i , result)
    }
    return result ; 

}

const decfactorial = facDec(9);

console.log(decfactorial)