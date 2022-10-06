/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

//in = array
//return = new array
//    --loop forward - push into new array
//    --loop backwards - push into new array

// Your code here

const arrowMirrorArray = (array) => {
  const newArray = array.map((element) => {
    return element
  })

  for (let i = array.length - 1; i >= 0; i--) {
    let element1 = array[i]
    newArray.push(element1);
  }

  return newArray;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
