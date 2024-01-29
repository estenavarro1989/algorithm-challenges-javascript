const search = (nums, target) => {
  let init = 0;
  let final = nums.length - 1;

  const rotatedArray = nums;
  const sortedArray = nums.sort(compareNumbers);
    console.log(rotatedArray, sortedArray);
  const pivot = findPivot(rotatedArray, sortedArray);

  while (init <= final) {
    let index = Math.floor((init + final) / 2);
    if (sortedArray[index] == target) {
      return index - pivot;
    } else if (sortedArray[index] < target) {
      init++;
    } else {
      final--;
    }
  }
  return -1;
};

const findPivot = (rotatedArray, sortedArray) => {
  const firsElement = sortedArray[0];
  for (let i = 0; i < rotatedArray.length; i++) {
    if (rotatedArray[i] == firsElement) {
      return i;
    }
  }
  return 0;
};

function compareNumbers(a, b) {
  return a - b;
}

const NUMS_1 = [4, 5, 6, 7, 0, 1, 2];
const TARGET_1 = 4;

console.log(search(NUMS_1, TARGET_1));
