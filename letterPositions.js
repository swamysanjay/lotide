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

const letterPositions = function(string) {
  let letterPos = {};


  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (!str[i].match(' ')) {
      if (!letterPos[str[i]]) letterPos[str[i]] = [];
      letterPos[str[i]].push(i);
    }
  }
  return letterPos;
};

console.log(letterPositions("Lighthouse in the house"));