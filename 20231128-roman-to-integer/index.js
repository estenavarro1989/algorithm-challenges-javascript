const romanNumbers = [
  {
    id: 1,
    symbol: "I",
    value: 1,
  },
  {
    id: 2,
    symbol: "V",
    value: 5,
  },
  {
    id: 3,
    symbol: "X",
    value: 10,
  },
  {
    id: 4,
    symbol: "L",
    value: 50,
  },
  {
    id: 5,
    symbol: "C",
    value: 100,
  },
  {
    id: 6,
    symbol: "D",
    value: 500,
  },
  {
    id: 7,
    symbol: "M",
    value: 1000,
  },
];

const romanToInt = (romanNum) => {
  let intNumber = 0;
  romanArray = romanNum.split("");
  for (let i = 0; i < romanArray.length; i++) {
    const romanObj = romanNumbers.filter((r) => r.symbol == romanArray[i]);
    const nextRomanObj = romanNumbers.filter(
      (r) => r.symbol == romanArray[i + 1]
    );
    if (romanObj.length == 0) return "This is not a roman number";
    if (nextRomanObj.length > 0 && romanObj[0].value < nextRomanObj[0].value) {
      intNumber += nextRomanObj[0].value - romanObj[0].value;
      i++;
      continue;
    }
    intNumber += romanObj[0].value;
  }
  return intNumber;
};

const EXAMPLE_1 = "III";
const EXAMPLE_2 = "LVIII";
const EXAMPLE_3 = "MCMXCIV";

console.log(romanToInt(EXAMPLE_1));
console.log(romanToInt(EXAMPLE_2));
console.log(romanToInt(EXAMPLE_3));
