//  Multipule parameter pass through the Function

function getAverage(assign1, assign2, assign3) {
  const total = (assign1 + assign2 + assign3);

  console.log(total)
  const average = total / 3;

//   console.log(average);

  return average;
}

const assign1 = 60;
const assign2 = 80;
const assign3 = 70;

const grandTotal = getAverage(assign1,assign2 , assign3);


console.log("Average Result the Calculation : ", grandTotal);
