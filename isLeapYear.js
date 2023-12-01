// leap year function creation

function isLeapYear(year) {
    
  const remainder = year % 4;

  if (remainder === 0) {
    // console.log("isLeapyear");

    return true;
  } else {
    // console.log(" isNot leap year ")

    return false;
  }
}

const resulOfyear = isLeapYear(2023);

console.log("My-year: ", resulOfyear);
