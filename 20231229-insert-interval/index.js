const insertInterval = (intervals, newInterval) => {
  let newIntervals = [];

  let firstElement;
  let lastElement;
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if(interval[1] < newInterval[0]) newIntervals.push(interval);
    if(interval[0] > newInterval[1]) {
      newIntervals.push(interval);
      continue;
    }
    if(interval[0] <= newInterval[0] && interval[1] >= newInterval[0]) {
      firstElement = interval[0];
      if(intervals[i+1][0] > newInterval[1]) {
        lastElement = newInterval[1];
        newIntervals.push([firstElement, lastElement]);
        continue;
      }
    }
    if(interval[0] > newInterval[0] && interval[1] < newInterval[1]) continue;
    if(interval[0] > newInterval[0] && interval[1] >= newInterval[1]) { 
      lastElement = interval[1];
      newIntervals.push([firstElement, lastElement]);
    }
    
  }
  return newIntervals;
};

const INTERVALS_1 = [
  [1, 3],
  [6, 9],
];
const NEW_INTERVAL_1 = [2, 5];
const INTERVALS_2 = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const NEW_INTERVAL_2 = [4, 8];

console.log(insertInterval(INTERVALS_1, NEW_INTERVAL_1));
console.log(insertInterval(INTERVALS_2, NEW_INTERVAL_2));
