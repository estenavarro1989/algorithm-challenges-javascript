const acceptDuplicates = (array) => {
  array = array.sort(compareNumbers);
  for (let i = 0; i < array.length; i++) {
    let duplicatedCount = 0;
    let j = i + 1;

    while (array[i] == array[j]) {
      duplicatedCount++;
      j++;
    }

    if (duplicatedCount == 1) i = i + duplicatedCount;
    if (duplicatedCount != 1) {
      if (duplicatedCount == 0) {
        array.splice(i, 1);
        i--;
      }
      if (duplicatedCount >= 2) {
        array.splice(i, duplicatedCount + 1);
        i = i - duplicatedCount + 1;
      }
    }
  }
  console.log(`A = ${array}`);
  return array.length;
};

function compareNumbers(a, b) {
  return a - b;
}

const ARRAY_1 = [1, 3, 2, 3, 2, 1, 3];
console.log(`length = ${acceptDuplicates(ARRAY_1)}`);

const ARRAY_2 = [1, 5, 3, 1, 5, 3];
console.log(`length = ${acceptDuplicates(ARRAY_2)}`);
