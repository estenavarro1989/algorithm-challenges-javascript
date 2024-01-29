var isSameTree = function(p, q) {
    let queue = [];
    queue.push(p);
    queue.push(q);
    while (queue.length != 0) {
      let p = queue.shift();
      let q = queue.shift();
  
      if (p == null && q == null) {
        continue;
      } else if (p == null || q == null || p.val != q.val) {
        return false;
      } else {
        queue.push(p.left);
        queue.push(q.left);
        queue.push(p.right);
        queue.push(q.right);
      }
    }
    console.log(queue);
    return true;
  };

console.log(isSameTree([1, 5, 3], [1, null, 3]))