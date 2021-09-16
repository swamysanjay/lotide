const map = function(array, callback) {
  const results = [];
  for (item of array) {
    results.push(callback(item));
  }
  return results;
}
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if ((Array.isArray(array1[i]) || Array.isArray(array2[i])) && eqArrays(array1[i], array2[i]) === false) {
      return false;
    }
    else if (Array.isArray(array1[i]) || Array.isArray(array2[i])) {
      eqArrays(array1[i], array2[i]);
    }
    else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`assertion passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`assertion failed: ${array1} === ${array2}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);