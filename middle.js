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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
    console.log(`😜😍🍆Arrays are equal!`)
  } else {
    console.log(`😡🤮🤢Arrays are NOT equal!`)
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



console.log(middle([1])) // => []
console.log(middle([1, 2]))
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]