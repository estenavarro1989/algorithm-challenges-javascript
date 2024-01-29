const phoneLetters = [
  { number: 2, letters: ["a", "b", "c"] },
  { number: 3, letters: ["d", "e", "f"] },
  { number: 4, letters: ["g", "h", "i"] },
  { number: 5, letters: ["j", "k", "l"] },
  { number: 6, letters: ["m", "n", "o"] },
  { number: 7, letters: ["p", "q", "r", "s"] },
  { number: 8, letters: ["t", "u", "v"] },
  { number: 9, letters: ["w", "x", "y", "z"] },
];

const letterCombinations = (digits) => {
  const combinations = [];
  digits = digits.split("");
  if (digits.length == 1) {
    const letters = phoneLetters.filter((p) => p.number == parseInt(digits[0]));
    return letters && letters.length > 0 ? letters[0].letters : [];
  }
  for (let i = 0; i < digits.length; i++) {
    const firstPhoneLetter = phoneLetters.filter(
      (p) => p.number == parseInt(digits[i])
    );
    if (firstPhoneLetter.length > 0) {
      const firstLetters = firstPhoneLetter[0].letters;
      for (let j = i + 1; j < digits.length; j++) {
        const secPhoneLetter = phoneLetters.filter(
          (p) => p.number == parseInt(digits[j])
        );
        if (secPhoneLetter.length > 0) {
          const secLetters = secPhoneLetter[0].letters;
          combinations.push(
            ...firstLetters.map((f) => secLetters.map((s) => f.concat(s)))
          );
        }
      }
    }
  }
  return combinations.flat();
};

const EXAMPLE_1 = "23";
const EXAMPLE_2 = " ";
const EXAMPLE_3 = "2";

console.log("1", letterCombinations(EXAMPLE_1));
console.log("2", letterCombinations(EXAMPLE_2));
console.log("3", letterCombinations(EXAMPLE_3));
