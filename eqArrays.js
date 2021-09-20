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


module.exports = eqArrays;

