// make word revers

function wordRevers(str) {

    // this line of code make help to split the word with blank space ; 

  let word = str.split("   ");

  // contain the result this arraay 
  
  let result = [];

  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];
    result.push(element);
  };
  // for this code useing Join the word ; 
  const revers = result.join(" ");
  return revers;
}

const wordStr = " hallow are you ok ";

const resultRevers = wordRevers(wordStr);

console.log(resultRevers);
