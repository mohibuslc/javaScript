
// for-in-loop 


const shoppingCart ={

    book : 3 , 
    mouse:1, 
    keybord:2,
    monitor:3
   }

   
   for(let key in shoppingCart){


    console.log("i Value is ", key , "Shopping keys Value is = ", shoppingCart[key])
   }