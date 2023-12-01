// inside the function declear calculation of inch To feet ;

function inchTofeet(inchs) {
  const feet = inchs / 12;

  return feet;
}

const dadaInch = 144;

const dadaFeet = inchTofeet(dadaInch);

console.log(dadaFeet);
