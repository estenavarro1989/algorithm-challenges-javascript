const rotate = (nums, k) => {
  const array = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i < k) {
      array.push(nums[nums.length - k + i]);
    }
    if (i >= k) {
      array.push(nums[i - k]);
    }
  }
  return array;
};

const EXAMPLE_1 = [1, 2, 3, 4, 5, 6, 7];
const K_1 = 3;
const EXAMPLE_2 = [-1, -100, 3, 99];
const K_2 = 2;

console.log(rotate(EXAMPLE_1, K_1));
console.log(rotate(EXAMPLE_2, K_2));
