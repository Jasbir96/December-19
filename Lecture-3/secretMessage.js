// Que Build string using map function first character of each string of the array.

var animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog"
];
function getFirstChar(animal) {
  return animal.charAt(0);
}

const charArr = animals.map(getFirstChar);
console.log(charArr.join(""));

