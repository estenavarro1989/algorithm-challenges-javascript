const divide = (dividen, divisor) => {
  let isNegative = false;

  if (dividen > 231) dividen = 231;
  if (dividen < -231) dividen = -231;
  if (divisor > 231) divisor = 231;
  if (divisor < -231) divisor = -231;

  if (divisor < 0 || dividen < 0) {
    divisor = Math.abs(divisor);
    dividen = Math.abs(dividen);
    isNegative = true;
  }

  let array = Array(divisor).fill(0);
  let i = 0;
  let j = 0;
  while (i < dividen) {
    array[j] = array[j] + 1;
    i++;
    j++;
    if (j == divisor) j = 0;
  }
  return isNegative ? -array[array.length - 1] : array[array.length - 1];
};

console.log(divide(10, 3));
console.log(divide(7, -3));
