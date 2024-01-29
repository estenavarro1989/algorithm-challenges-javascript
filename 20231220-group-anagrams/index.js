const groupAnagrams = (strs) => {
    let result = [];
    for (let i = 0; i < strs.length; i++) {
        
        let anagrams = [strs[i]];
        for (let j = i + 1; j < strs.length; j++) {
            const next = strs[j].split("").sort().join("");
            const curr = strs[i].split("").sort().join("");
            if(curr == next) { 
                anagrams.push(strs[j]);
                strs.splice(j, 1)
            };
        }
       result.push(anagrams);
        
    }
    return result;
}

const EXAMPLE_1 = ["eat","tea","tan","ate","nat","bat"];
const EXAMPLE_2 = [""];
const EXAMPLE_3 = ["a"];

console.log(groupAnagrams(EXAMPLE_1));
console.log(groupAnagrams(EXAMPLE_2));
console.log(groupAnagrams(EXAMPLE_3));
