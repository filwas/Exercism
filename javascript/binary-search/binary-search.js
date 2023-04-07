//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (array, number, passedIndex = 0) => {
  let len = array.length;
  let currIndex = Math.ceil(len/2)-1;
  let curr = array[currIndex]
  switch (true) {
    case number == curr: return currIndex + passedIndex;
    case number > curr: return find(array.slice(currIndex+1), number, passedIndex + currIndex + 1);
    case number < curr: return find(array.slice(0, currIndex), number);
    default: throw new Error("Value not in array")
  }
};
