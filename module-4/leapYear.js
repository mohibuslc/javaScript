
/* Leap year calculation   */


function leapYear(years){


    let leap = years/4

    if(leap === 0){

       return true
    }else{

        return false 
    }
}

const result = leapYear(2067
    )

console.log(result)