const minimumWindowsSubstring = (string, pattern) => {
  let minSubstring = "";
  array = string.split("");
  let minLength = array.length + 1;

  for (let i = 0; i < array.length; i++) {
    if (!pattern.includes(array[i])) continue;

    let patternArray = pattern.split("");
    let substringLength = pattern.length;
    // console.log(`pattern length: ${substringLength}`);

    for (let j = i; j < array.length + 1; j++) {
    //   console.log(`pattern array: ${patternArray}`);
      if (substringLength == 0) {
        // found a window
        if(string.substring(i, j).length < minLength) {
            minSubstring = string.substring(i, j);
        }
        // console.log(`new window - ${string.substring(i, j)}`);
        break;
      }
      if (patternArray.join("").includes(array[j])) {
        patternArray = patternArray.filter((e) => e !== array[j]);
        substringLength--;
      }

    //   console.log(`${array[i]} - ${array[j]} - ${pattern.includes(array[j])}`);
    }
  }
  return minSubstring;
};

const STRING_1 = "ADOBECODEBANC";
const PATTERN_1 = "ABC";

console.log(minimumWindowsSubstring(STRING_1, PATTERN_1));

const STRING_2 = "MARCHMONDAYCARRIED";
const PATTERN_2 = "AHC";

console.log(minimumWindowsSubstring(STRING_2, PATTERN_2));

const STRING_3 = "HOUSEMARRIEDCUSTOM";
const PATTERN_3 = "IEMD";

console.log(minimumWindowsSubstring(STRING_3, PATTERN_3));

const STRING_4 = "EFGHABCIO";
const PATTERN_4 = "ABC";

console.log(minimumWindowsSubstring(STRING_4, PATTERN_4));