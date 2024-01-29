const longestCommonPrefix = (array) => {
  let longPrefix = [];
  let letterNumber = 0;
  let letter = "";
  let finished = false;
  while (!finished) {
    for (let i = 0; i < array.length; i++) {
      const wordArray = array[i].split("");
      if (i == 0) letter = wordArray[letterNumber];
      if (wordArray[letterNumber] !== letter) finished = true;
    }

    if (!finished) longPrefix.push(array[0].split("")[letterNumber]);
    letterNumber++;
  }
  return longPrefix.join("");
};

const EXAMPLE_1 = ["flower", "flow", "flight"];
const EXAMPLE_2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(EXAMPLE_1));
console.log(longestCommonPrefix(EXAMPLE_2));
