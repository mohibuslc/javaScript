

// Output come out Bigger one 

let arr = [22, 2, 42, 9, 822,333];

let output = arr.reduce((res, val) => {


    return res > val ?  res : val 
    
}); 

console.log(output);
