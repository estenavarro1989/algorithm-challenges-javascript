class ListNode {
  val;
  next;

  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const deleteDuplicates = (head) => {
  const nodeList = buildListNode(head);
  return nodeList.filter(n => n.val != n.next);
};

const buildListNode = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = new ListNode(array[i], array[i + 1]);
    newArray.push(element);
  }
  return newArray;
};

const EXAMPLE_1 = [1, 1, 2];
console.log(deleteDuplicates(EXAMPLE_1));

const EXAMPLE_2 = [1, 1, 2, 3, 3];
console.log(deleteDuplicates(EXAMPLE_2));
