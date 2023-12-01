

// Learning How to do set Value object , how dispay array Keys only , Keys Value Display , How make change Keys values etc . 
const shoppingCart ={

 book : 3 , 
 mouse:1, 
 keybord:2,
 monitor:3
}

console.log(shoppingCart)

shoppingCart['mouse']= 23

console.log(shoppingCart)

shoppingCart.mouse = 40 ; 

console.log(shoppingCart)

var propertiesName = Object.keys(shoppingCart)

console.log(propertiesName)

var propertiesValue = Object.values(shoppingCart)

console.log(propertiesValue);


