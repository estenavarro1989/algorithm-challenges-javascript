class TreeNode {
  val;
  left;
  right;

  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const inorderTransversal = (root) => {
  //   tree = new TreeNode(1);
  //   if (root === null) {
  //     return;
  //   }

  //   // First recur on left subroot
  //   inorderTransversal(root.left);

  //   // Now deal with the root
  //   console.log(root.val);

  //   // Then recur on right subroot
  //   inorderTransversal(root.right);
  //   return root;

  return root;
};

const buildTree = (array, i) => {
  let root;
  if (i < array.length && array[i]) {
    root = new TreeNode(array[i]);
    root.left = buildTree(array, 2 * i + 1);
    root.right = buildTree(array, 2 * i + 2);
  }
  return root;
};

console.log(buildTree([1, null, 2, 3], 0));
