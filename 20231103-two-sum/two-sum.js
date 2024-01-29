class TwoSum {
  data = [];

  add(arrayNumbers) {
    this.data = arrayNumbers;
  }

  find(target) {
    for (let i = 0; i < this.data.length; i++) {
        const validateNumber = this.data[i];
        for (let j = 0; j < this.data.length; j++) {
            const actualNumber = this.data[j];
            if(i != j) {
                if(validateNumber + actualNumber == target) return { index1: i+1, index2: j+1}
            }
        }
    }
    return 'No matches with target';
  }
}

const INPUT_ARRAY = [2,7,11,15]
const TARGET = 9;

const twoSum = new TwoSum();
twoSum.add(INPUT_ARRAY);
console.log(twoSum.find(TARGET));