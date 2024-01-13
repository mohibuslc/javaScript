
/* Creating Shopping Cart calculate product quantity  */ 

const shoppingCart = [

    {name:'show' , price: 1600 , quantity: 9}, 
    {name:'shart' , price: 2200 , quantity: 9}, 
    {name:'T-shart' , price: 1000 , quantity: 4}, 
    {name:'pent' , price: 1000 , quantity: 10}
];


function shoppingCall(shoppingCart){
 

    let sum = 0 ; 


    for(let i = 0 ; i<shoppingCart.length ; i++){

   
        const products = shoppingCart[i] ; 

        console.log(products)

     const totalprice = products.price * products.quantity ; 

     sum = sum + totalprice ; 

    }    

    return sum 
}
const expance = shoppingCall(shoppingCart)
console.log(`====================================`)
console.log(`Total Expance Today : ${expance}`)
console.log(`====================================`)