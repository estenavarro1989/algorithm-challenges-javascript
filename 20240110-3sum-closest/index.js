const threeSumClosest = (nums, target) => {
  nums.sort(compareNumbers);
  let result = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[i + 1] + nums[k];
      if (sum > target) {
        j++;
      } else {
        k--;
      }
      if (Math.abs(result - target) > Math.abs(sum - target)) result = sum;
    }
  }
  return result;
};

function compareNumbers(a, b) {
  return a - b;
}

const NUMS_1 = [-1, 2, 1, -4];
const TARGET_1 = 1;

const NUMS_2 = [0, 0, 0];
const TARGET_2 = 1;

console.log(threeSumClosest(NUMS_1, TARGET_1));
console.log(threeSumClosest(NUMS_2, TARGET_2));
