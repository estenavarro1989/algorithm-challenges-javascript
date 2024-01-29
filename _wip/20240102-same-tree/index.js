function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const isSameTree = (p, q) => {
  console.log(p.val, p.left, p.right, q.val, q.left, q.right);
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val || q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p1 = new TreeNode([1, 2, 3]),
  q1 = new TreeNode([1, 2, 3]);
const p2 = new TreeNode([1, 2]),
  q2 = new TreeNode([1, null, 2]);
const p3 = new TreeNode([1, 2, 1]),
  q3 = new TreeNode([1, 1, 2]);

console.log(isSameTree(p1, q1));
console.log(isSameTree(p2, q2));
console.log(isSameTree(p3, q3));
