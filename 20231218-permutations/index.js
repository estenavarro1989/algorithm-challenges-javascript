const permutations = (array, size = array.length) => {
  if (size > array.length) return [];
  if (size == 1) return array.map((d) => [d]);

  return array.flatMap((d) =>
    permutations(
      array.filter((a) => a !== d),
      size - 1
    ).map((item) => [d, ...item])
  );
};

const EXAMPLE_1 = [1, 2, 3];
const EXAMPLE_2 = [0, 1];
const EXAMPLE_3 = [1];

console.log(permutations(EXAMPLE_1));
console.log(permutations(EXAMPLE_2));
console.log(permutations(EXAMPLE_3));
