
// Qs:  Creation a function using the "function" keyword that takes a String as an Argument and return the number of vowels in the String. 

// Vowels : "a" , "e" , "i" , "o" , "u"

function countVowels(str){

    let count = 0 ; 

 for(let i = 0 ; i<str.length ; i++){
        let char = str[i];


    if(char ==='a'|| char ==='e' || char ==='i' || char ==='o' || char === 'u'){

        count++
    }
 } return  count


}

console.log(` Tota Vowel in this String  ${countVowels("mohammad")}`)