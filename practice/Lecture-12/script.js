
// Synchronous  Code make understand ,. Synchronous code make wait another program make his Activaties finish then do next step .


// Example of Code : 

// console.log("one"); 
// console.log("Two"); 
// console.log("three"); 
// console.log("Four"); 

//Asynchronous programming .. 

console.log("one"); 
console.log("Two"); 
function hello(){

    console.log("Welcome to JavaScript")
}
setTimeout(hello , 4000)
console.log("three"); 
console.log("Four"); 

// callBack concept UnderStand 

function sumCal(a, b){

    console.log(a+b)
}

function calculator(a , b , sumCal){

    sumCal(a, b)
}

calculator(1, 3 , sumCal)


// Nsted Callback Hall code 


for (let i = 0 ; i<=5 ; i++){

    let str ="" ; 

    for(let j=1 ; j<=5 ; j++){

        str = str + j
    }

    console.log(i , str)
}
// Nested callBack 
let age =12 ; 

if(age>=18){

    if(age>=60){
        console.log("Senior")
    }else{

        console.log("Medium")
    }

}else{

    console.log("Child")
}