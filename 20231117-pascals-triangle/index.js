const pascalTriangle = (numRows) => {
  let array = [[1]];
  i = 1;
  let lastArray = array;
  while (i < numRows) {
    newArray = [1];
    for (let i = 0; i < lastArray.length; i++) {
      const sumNum = i + 1 >= lastArray.length ? 0 : lastArray[i + 1];
      newArray.push((parseInt(lastArray[i]) + sumNum));
    }
    array.push(newArray);
    lastArray = newArray;
    i++;
  }
  return array;
};

const ROWS_1 = 5;
console.log(ROWS_1, pascalTriangle(ROWS_1));

const ROWS_2 = 6;
console.log(ROWS_2, pascalTriangle(ROWS_2));
