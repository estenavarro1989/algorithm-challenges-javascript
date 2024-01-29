const isPalindromeNumber = (num) => {
  num = Array.from(String(num), Number);
  return JSON.stringify(num) == JSON.stringify([...num].reverse());
};

function compareNumbers(a, b) {
  return a - b;
}

const EXAMPLE_1 = 121;
const EXAMPLE_2 = -121;
const EXAMPLE_3 = 10;

console.log(isPalindromeNumber(EXAMPLE_1));
console.log(isPalindromeNumber(EXAMPLE_2));
console.log(isPalindromeNumber(EXAMPLE_3));
