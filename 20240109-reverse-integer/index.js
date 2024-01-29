const reverse = (x) => {
    let isNegative = false;
    if(x < 0) isNegative = true;

    x = Array.from(String(Math.abs(x)), Number);
    if(x[x.length -1] == 0) x = x.slice(0, x.length -1)
    
    x = x.reverse();
    x = x.join('');

    // Validate the integer is 32-bit integer
    if (x < (Math.pow(2, 31) * -1) || x > Math.pow(2, 31) - 1) return 0;

    return isNegative ? x * -1 : x;
}

const EXAMPLE_1 = 123;
const EXAMPLE_2 = -123;
const EXAMPLE_3 = 120;

console.log(reverse(EXAMPLE_1));
console.log(reverse(EXAMPLE_2));
console.log(reverse(EXAMPLE_3));