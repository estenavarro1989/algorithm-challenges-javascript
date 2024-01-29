const mergeIntervals = (intervals) => {
  let fullArray = [];
  let mergeArray = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    // Order the interval
    interval.sort(compareNumbers);
    for (let j = interval[0]; j <= interval[interval.length - 1]; j++) {
      // Add all the numbers to fullArray
      fullArray.push(j);
    }
  }
  // Order fullArray
  fullArray.sort(compareNumbers);

  // Delete duplicates
  fullArray = [...new Set(fullArray)];

  // Get the intervals
  let firstElement = fullArray[0];
  let lastElement;
  for (let i = 0; i < fullArray.length; i++) {
    if (fullArray[i] + 1 == fullArray[i + 1]) continue;
    if (fullArray[i] + 1 < fullArray[i + 1]) lastElement = fullArray[i];
    if (i == fullArray.length - 1) lastElement = fullArray[i];

    mergeArray.push([firstElement, lastElement]);
    firstElement = fullArray[i + 1];
  }
  return mergeArray;
};

function compareNumbers(a, b) {
  return a - b;
}

const EXAMPLE_1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(EXAMPLE_1));

const EXAMPLE_2 = [
  [1, 4],
  [4, 5],
];
console.log(mergeIntervals(EXAMPLE_2));
