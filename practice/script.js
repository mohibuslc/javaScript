// let gameNum = "29";

// let userNum = prompt(" Please Enter Game Number: ");

// while (gameNum != userNum) {
//   userNum = prompt("sorry please enter again number");
// }

// console.log(" ongrulation");

// let fullName = prompt(" Please enter your name")

// let userName = "@".concat(fullName).concat(fullName.length)
// console.log(userName)

class Persone{

    constructor(name){

      this.name = " Hallow!!! wht is your name"; 

      this.name = name ; 



    }

    eat(){

        console.log(" Do eat and !! persone going To Sleep")
    }

}

class Enineer extends Persone{

    constructor(name){

       super(name)

    }

    work(){
        super.eat()
        console.log("Work in Engineer Nicely ")
    }
}

let engObj = new Enineer("Rasada Begum "); 

