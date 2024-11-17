// 2 inputs: x = total number of pizza slices; y = number of people sharing
// Calculate number each person gets (x/y)
// Return string w/ calculated slices per person

const sharePizza = function (totalSlices, numberOfPeople) {
  const slicesPerPerson = (totalSlices / numberOfPeople).toFixed(2);

  return `Each person get ${slicesPerPerson} slices of pizza; from our ${totalSlices} slice pizza.`;
};
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
