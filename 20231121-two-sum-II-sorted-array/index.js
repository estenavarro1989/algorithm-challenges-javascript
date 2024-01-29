const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) return [i + 1, j + 1];
    }
  }
};

const NUMBERS_1 = [2, 7, 11, 15];
const TARGET_1 = 9;

const NUMBERS_2 = [2, 3, 4];
const TARGET_2 = 6;

const NUMBERS_3 = [-1, 0];
const TARGET_3 = -1;

console.log(twoSum(NUMBERS_1, TARGET_1));
console.log(twoSum(NUMBERS_2, TARGET_2));
console.log(twoSum(NUMBERS_3, TARGET_3));
