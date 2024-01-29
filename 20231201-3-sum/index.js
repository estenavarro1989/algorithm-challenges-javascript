const threeSum = (array) => {
  //   array = array.sort(compareNumbers);
  let threeSumArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i >= array.length - 2) continue;
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] == 0)
          threeSumArray.push([array[i], array[j], array[k]]);
      }
    }
  }

  threeSumArray = threeSumArray.map((a) => a.sort(compareNumbers));

  let uniqueArray = Array.from(
    new Set(threeSumArray.map(JSON.stringify)),
    JSON.parse
  );

  return uniqueArray;
};

function compareNumbers(a, b) {
  return a - b;
}

const EXAMPLE_1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(EXAMPLE_1));

const EXAMPLE_2 = [0, 1, 1];
console.log(threeSum(EXAMPLE_2));

const EXAMPLE_3 = [0, 0, 0];
console.log(threeSum(EXAMPLE_3));
