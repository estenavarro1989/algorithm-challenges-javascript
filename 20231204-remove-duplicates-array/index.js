const removeDuplicates = (array) => {
  array = array.sort(compareNumbers);
  for (let i = 0; i < array.length; i++) {
    while (array[i] == array[i + 1]) {
      array.splice(i + 1, 1);
    }
  }
  return array.length;
};

function compareNumbers(a, b) {
  return a - b;
}

const ARRAY_1 = [1, 1, 2];
console.log(removeDuplicates(ARRAY_1));

const ARRAY_2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(ARRAY_2));



