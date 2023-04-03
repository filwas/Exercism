//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (input) => {
  let number = input.charCodeAt() - 64;
  var retArray = [];
  for (let i = 0; i < number; i++) {
    let left = " ".repeat(i)+String.fromCharCode(64+number-i)+" ".repeat(number-i-1)
    retArray.push(left + [...left].reverse().join("").slice(1))
    if (i != 0) retArray.unshift(left + [...left].reverse().join("").slice(1))
  }
  return retArray
};
