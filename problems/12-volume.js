/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/
// recVolumn in = height int
// recVolumn out = a function// 1. recVolumn in = height int
// 2. recVolumn out = a function
// 3. function returned by recVolume can then be invoked two more times with a single argument number each time
// one for length and one for width
// 4. return the volume of the rectangle
// 5. Any subsequent calls to the function returned by recVolume should continue to return the original volume.

recVolume = (height) => {
  volumeArr = [height]
  return (num) => {
    return (length) => {
      if (volumeArr.length === 3) {
        return volumeArr[0] * volumeArr[1] * volumeArr[2]
      } else if (volumeArr.length < 3) {
        return volumeArr.push(length)
        
      }
    }
  }
} 

recVolume(10);
recVolume(20);

console.log(recVolume(30));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
