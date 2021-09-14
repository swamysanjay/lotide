const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`assertion passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`assertion failed: ${array1} === ${array2}`);
  }
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

const without = function (array, item) {
  let randomArray = [];

  array.forEach(function(value) {
    if (!item.includes(value)) {
      randomArray.push(value);
    }
  });
  return randomArray;
  
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

