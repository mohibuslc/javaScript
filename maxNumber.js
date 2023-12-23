



// Findout the which number are largest in the Array ; 

function arrayMax(numbers){

    let largest = numbers[0];

    let resultArray = [];

    for(let i=0 ; i<numbers.length ; i++){
        // const idx = i ; 
        const element = numbers[i];

            console.log(element)
        if(element>largest){

            largest = element

            resultArray.push(largest)
        }

    }return resultArray; 



}

const maxNumbers =[123,33,44,567,44,333,904];

const mostheighst = arrayMax(maxNumbers)

console.log(mostheighst) 