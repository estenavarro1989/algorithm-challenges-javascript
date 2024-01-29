class ListNode {
  val;
  next;

  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const swapPairs = (head) => {
  const nodeList = buildListNode(head);
  for (let i = 0; i < nodeList.length; i++) {
    if (i == nodeList.length - 1 && !isOdd(i)) return nodeList;
    const curr = nodeList[i];
    const next = nodeList[i + 1];
    const nextVal = next ? next.val : null;

    if (curr.next == nextVal) {
      nodeList[i] = next;
      nodeList[i + 1] = curr;
    }
  }
  return nodeList;
};

const buildListNode = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = new ListNode(array[i], array[i + 1]);
    newArray.push(element);
  }
  return newArray;
};

const isOdd = (num) => {
  return num % 2;
};

const EXAMPLE_1 = [1, 2, 3, 4];
const EXAMPLE_2 = [];
const EXAMPLE_3 = [1];

console.log(swapPairs(EXAMPLE_1));
console.log(swapPairs(EXAMPLE_2));
console.log(swapPairs(EXAMPLE_3));
