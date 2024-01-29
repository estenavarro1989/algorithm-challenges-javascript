const minimumSizeSubarraySum = (array, number) => {
  let outputArray = [];
  let outputLength = array.length + 1;
  let orderedArray = array.sort().reverse()

  for (let i = 0; i < orderedArray.length; i++) {
    const actualNumber = orderedArray[i];
    let actualArray = [];

    let actualSum = actualNumber;
    actualArray.push(actualNumber);
    let j = 0;
    while (actualSum < number && j <= orderedArray.length) {
      if (j !== i) {
        actualSum += orderedArray[j];
        actualArray.push(orderedArray[j]);
      }
      j++;
    }

    // console.log(number, actualSum, actualArray, orderedArray.length, j, i);

    if (actualSum >= number) {
      if (actualArray.length < outputLength) {
        outputArray = actualArray;
        outputLength = actualArray.length;
      }
    }
  }

  if (outputLength > orderedArray.length) return 0;
  return outputLength;
};

const ARRAY_1 = [2, 3, 1, 2, 4, 3];
const NUMBER_1 = 7;

const ARRAY_2 = [2,6,5,6,7,9,10];
const NUMBER_2 = 22;

const ARRAY_3 = [1,1,1,1,1,1,1,1];
const NUMBER_3 = 11;

console.log(minimumSizeSubarraySum(ARRAY_1, NUMBER_1));
console.log(minimumSizeSubarraySum(ARRAY_2, NUMBER_2));
console.log(minimumSizeSubarraySum(ARRAY_3, NUMBER_3));



