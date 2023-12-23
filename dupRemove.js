
// Remove the Dulpicate name or Element remove from Array .... 


const name = ['mohib' , 'london', 'japan', 'mohib', 'sylhet','dhaka', 'japan','kamal' , 'kamal']

function removeDeplicate(name){

 const  unique = []; 

for(let i=0; i<name.length ; i++){
    
//  Remove Duplicate name from Array : 

    const elements = name[i]; 

    // console.log(i , elements)

    if(unique.includes(elements) === false){

        unique.push(elements)
    }
}
return unique



}
const uniqeId = removeDeplicate(name)

console.log(uniqeId)