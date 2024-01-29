const climbStairs = (n) => {
    prev1 = 1;
    prev2 = 1;

    for (let i = 2; i <= n; i++) {
        const dp = prev1 + prev2;
        prev2 = prev1;
        prev1 = dp;
    }
    return prev1;
}

const EXAMPLE_1 = 2;
const EXAMPLE_2 = 3;

console.log(climbStairs(EXAMPLE_1))
console.log(climbStairs(EXAMPLE_2))