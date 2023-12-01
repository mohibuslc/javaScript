

// calculation about the Factorial Number ; 


function calFactorial(number){

    let sum = 0 ; 

    const valueOffactorial = []

    for(let i = 0 ; i<number ; i++){

        sum = sum + i ; 
       
        console.log(i  , sum )
        valueOffactorial.push(i)
    }

     return{

        valueOffactorial,
        sum
     } 

}

const result = calFactorial(10) ; 

console.log(result)