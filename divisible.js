/* 
Practice Question : write  for , bar , foobar if divisible by 3 or 5 or bouth ; 

Requirment : 

1. show output from 1 To 50 ; 

2. if the number divisable by 3 then instend of the number show 'foo' ; 
3.  if the number divisable by 5 then instend of the number show 'bar' ; 
4.  if the number divisable by 3  and 5 bouth then instend of the number show 'foobar' ; 

*/


for(let i = 1 ; i<=50 ; i++){

    if(i % 3 === 0 && i % 5 ===0){

        console.log("foobar")
        
    }else if( i % 3 === 0){
        console.log("foo")
    }else if(i % 5 === 0){

        console.log("bar")
    }else{

        console.log(i)
    }
}

