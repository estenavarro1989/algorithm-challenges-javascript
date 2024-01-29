const maxArea = (heights) => {
    let max = 0
  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
        const area = Math.min(heights[i], heights[j]) * (j - i);
        if(area > max) max = area
    }
  }
  return max;
};

const EXAMPLE_1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(EXAMPLE_1));

const EXAMPLE_2 = [1, 1];
console.log(maxArea(EXAMPLE_2));
