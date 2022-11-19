//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...input) => {
  var len = input.length
  if (len == 0) return '';
  var retArr = []
  var first = input.shift()
  if (typeof input[len-2] == "object") {
    var qualifier = input.pop().qualifier+" ";
    console.log(qualifier);
  }

  input.reduce((prev, curr, index) => {
    retArr.push(`For want of a ${index == 0 ? first + " the " + curr : prev + " the " + curr} was lost.\n`)
    return curr;
  }, null)

  retArr.push(`And all for the want of a ${qualifier ? qualifier + first : first}.`)
  return retArr.join("")
};
