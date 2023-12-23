// how to do reversed String ..

function revers(text) {
    
    let reversd = '';
    
  for (let i = text.length - 1; i >= 0; i--) {
   
    const idx = i;

    const element = text[idx];
    reversd = reversd + element;
    console.log(element);
  }
  return reversd;
}

const myText = "PORTUGAL";

const textRevers = revers(myText);
console.log(textRevers);
