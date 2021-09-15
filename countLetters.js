const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }

};

const countLetters = function(string) {
  let randomString = string.split(" ").join('');
  let results = {};
  for (let i of randomString) {
    results[i] ? results[i] += 1 : results[i] = 1;
  }
  return results;
}

console.log(countLetters('countLetters'));