const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    const diff = target - array[i];
    if (array.includes(diff)) {
      if (array.indexOf(diff) !== i)
        return [i, array.indexOf(diff)].sort(compareNumbers);
    }
  }
  return `no matches`;
};

function compareNumbers(a, b) {
  return a - b;
}

const INPUT_1 = [2, 7, 11, 15];
const TARGET_1 = 9;

console.log(twoSum(INPUT_1, TARGET_1));

const INPUT_2 = [3, 2, 4];
const TARGET_2 = 6;

console.log(twoSum(INPUT_2, TARGET_2));

const INPUT_3 = [3, 3];
const TARGET_3 = 6;

console.log(twoSum(INPUT_3, TARGET_3));
