export const transpose = (input) => {
  if (input.length == 0) return new Array()
  var maxLen = 0  // this exercise is much easier, if we assume all provided rows are the same length. the first couple lines makes sure they really are :)
  input.forEach(e => maxLen = e.length > maxLen ? e.length : maxLen) // this line searches for the maximum length from all of the rows
  input.forEach((e, i, a) => a[i] = e.padEnd(maxLen)) //this line adds a space up until the row's length equals maximum length

  var retArr = []
  for (let i = 0; i < input.length; i++) {  // this is the simplest transposition algorithm possible with two fors
    for (let j = 0; j < maxLen; j++) { //first for "i" goes through each row, second for "j" goes through each letter in a single row
      if (retArr[j]) { // we must make sure that the row in retArr actually exists before we concat something to it, otherwise all rows would start with "undefined"
        retArr[j] += input[i][j]
      } else {
        retArr[j] = input[i][j]
      }
    }
  }

  retArr[retArr.length-1] = retArr[retArr.length-1].trimRight() // this trims the excess padding from last row

  return retArr;

}