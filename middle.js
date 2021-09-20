const eqArrays = function(array1, array2) {
  let correct = true;

  //if the two arrays are not the same length the assertion fails automatically
  if (array1.length !== array2.length) {
    correct = false;
  } 

  //if the two arrays are the same length this runs:
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      correct = false;
    }
  }

  return correct;

}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`assertion passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`assertion failed: ${array1} === ${array2}`);
  }
}

const middle = function (array) {
  let middleArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return middleArray;
    }
    else if (array.length %2 === 0) {
      return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
    } else {
      return [array[Math.floor(array.length / 2)]];
    }
  }
  return middleArray;S
}



module.exports = middle;