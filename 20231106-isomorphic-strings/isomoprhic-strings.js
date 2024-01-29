// const areIsomorphicStrings = (s, t) => {
//   newString = [];
//   if (s.length != t.length) return false;

//   s = s.split("");
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < t.length; j++) {
//       console.log(s[i], t[i], t[j])
//       if(s.find(c => (s.includes(t[j])))) return;
//       if(t[i] == t[j]) s[i] = t[i];
//     }
//     console.log(s)
//   }
//   s = s.join("");
//   if (s == t) return true;
//   return false;
// };

const areIsomorphicStrings = (s, t) => {
  let usedChars = [];
  if (s.length != t.length) return false;

  s = s.split("");
  t = t.split("");
  for (let i = 0; i < s.length; i++) {
    if(usedChars.includes(s[i])) continue;
    
    usedChars.push(s[i])
    s[i] = t[i];

    for (let j = i; j < t.length; j++) {
      if(t[j] == t[i]) s[j] = t[j];
    }
    
  }
  s = s.join("");
  t = t.join("");
  if (s == t) return true;
  return false;
};

const example1s1 = "egg";
const example1s2 = "add";

const example2s1 = "foo";
const example2s2 = "bar";

const example3s1 = "cola";
const example3s2 = "hola";

console.log(
  example1s1,
  example1s2,
  areIsomorphicStrings(example1s1, example1s2)
);
console.log(
  example2s1,
  example2s2,
  areIsomorphicStrings(example2s1, example2s2)
);
console.log(
  example3s1,
  example3s2,
  areIsomorphicStrings(example3s1, example3s2)
);
