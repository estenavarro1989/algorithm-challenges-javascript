const removeElement = (nums, val) => {
    return nums.filter(n => n !== val).length;
}

const NUMS_1 = [3,2,2,3];
const VAL_1 = 3;
const NUMS_2 = [0,1,2,2,3,0,4,2];
const VAL_2 = 2;

console.log(removeElement(NUMS_1, VAL_1));
console.log(removeElement(NUMS_2, VAL_2));