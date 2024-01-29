const mergeList = (list1, list2) => {
  return [...list1, ...list2].sort(compareNumbers);
};

function compareNumbers(a, b) {
  return a - b;
}

const EXAMPLE_1_LIST_1 = [1,2,4];
const EXAMPLE_1_LIST_2 = [1,3,4];

console.log(mergeList(EXAMPLE_1_LIST_1, EXAMPLE_1_LIST_2));

const EXAMPLE_2_LIST_1 = [];
const EXAMPLE_2_LIST_2 = [];

console.log(mergeList(EXAMPLE_2_LIST_1, EXAMPLE_2_LIST_2));

const EXAMPLE_3_LIST_1 = [];
const EXAMPLE_3_LIST_2 = [0];

console.log(mergeList(EXAMPLE_3_LIST_1, EXAMPLE_3_LIST_2));
