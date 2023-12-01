// calculate the Even and odd number with function

function checknumber(num) {
  let remainder = num % 2;

  console.log(remainder);

  if (remainder === 0) {
    console.log(" Number is Even ");
  } else if (remainder !== 0) {
    console.log(" Number id ODD ");
  } else {

   
    return remainder;


  }
}

checknumber(109);
