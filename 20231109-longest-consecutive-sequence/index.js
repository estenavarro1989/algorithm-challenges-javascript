const longConsecSeq = (array) => {
  let outputArray = [];
  array = array.sort(compareNumbers);

  for (let i = 0; i < array.length; i++) {
    let longestArray = [array[i]];
    let j = i;
    let k = i + 1;
    while (array[j] + 1 == array[k]) {
      longestArray.push(array[k]);
      j++;
      k++;
    }

    if (longestArray.length > outputArray.length) outputArray = longestArray;
  }
  return outputArray;
};

function compareNumbers(a, b) {
  return a - b;
}

const ARRAY_1 = [100, 4, 200, 1, 3, 2];
const ARRAY_2 = [1, 2, 3, 6, 8, 10, 5, 7];

console.log(longConsecSeq(ARRAY_1));
console.log(longConsecSeq(ARRAY_2));
