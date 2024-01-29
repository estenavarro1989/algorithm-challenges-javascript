const searchInsert = (nums, target) => {
    let i = nums.length - 1;
    while(nums[i] >= target) {
        i--;
    }
    return ++i;
}

const NUMS_1 = [1,3,5,6], TARGET_1 = 5;
const NUMS_2 = [1,3,5,6], TARGET_2 = 2;
const NUMS_3 = [1,3,5,6], TARGET_3 = 7;

console.log(searchInsert(NUMS_1, TARGET_1));
console.log(searchInsert(NUMS_2, TARGET_2));
console.log(searchInsert(NUMS_3, TARGET_3));
