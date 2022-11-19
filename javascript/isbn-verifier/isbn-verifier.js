//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (number) => {
  number = number.replace(/\W/g,"").split("")

  if (number.length != 10) return false

  let sum = number.reduce((acc, curr, idx, arr) => {
    
    if (curr == "X" && idx == 9) {
      curr = 10
    } else if (isNaN(curr)) {
      return 0.5
    }

    return acc += (10-idx)*curr
  }, 0)

  return sum % 11 == 0 ? true : false
};
