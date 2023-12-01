
// let divs = document.querySelectorAll(".box");

// let idx = 1 ; 

// // for of use 
// for(div of divs){
 
    
// div.innerText= `New Uniquie value ${idx}`;

// idx ++


// }

let div = document.querySelectorAll(".box"); 



// its create Elemnts of 
// let newButton = document.createElement("button")

// newButton.innerText="Click me "

// div.append(newButton)

let idx = 1; 

for(divs of div){

divs.innerText=`new unique value : ${idx}` ; 

idx++

}

// style assign to the box from javaScripts 

let para = document.createElement("h1");
para.innerText = "Welcome to JavaScripts";

document.body.prepend(para);
para.style.color="red"
para.style.margin="4px  30px "



let styleBox = document.querySelector("#style-box");

styleBox.style.backgroundColor="yellow"

// concating with one text and another txt ; 



styleBox.innerText= divs.innerText.concat("\n \t Hellow !! how r u ? Welcome to JavaScripts" )


let p = document.querySelector("p")

p.setAttribute("class", "newClass")
p.classList
para.classList.add("newClass")