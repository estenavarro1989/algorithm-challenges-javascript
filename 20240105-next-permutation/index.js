const nextPermutation = (nums) => {
    let i, j;
    // Find the first index from the right where the value is less than the next value. If this doesn't exist then i = -1.
    for (i = nums.length - 2; nums[i] >= nums[i + 1] && i >= 0; i--);
    if (i >= 0) {
        // Find the first index from the right where the value is greater than the value found in previous step.
        for (j = nums.length - 1; nums[j] <= nums[i]; j--);
        // Swap the two values found.
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // Reverse everything after index i found above. Note if i = -1 then the whole array is reversed.
    for (i++, j = nums.length - 1; i < j; i++, j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return nums;
};

const EXAMPLE_1 = [1,2,3];
const EXAMPLE_2 = [3,2,1];
const EXAMPLE_3 = [1,1,5];

console.log(nextPermutation(EXAMPLE_1));
console.log(nextPermutation(EXAMPLE_2));
console.log(nextPermutation(EXAMPLE_3));