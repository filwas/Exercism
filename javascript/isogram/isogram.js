//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (input) => {
  input = input.replace(/\W/g,"").toLowerCase()
  var inputObject = wordObject(input)
  for (const letter in inputObject) {
    if (inputObject[letter] > 1) return false
  }
  return true;
};

export const wordObject = (word) => { // copied this function from my anagram solution
  var letters = {}
  for (const letter of word.toLowerCase()) {
    if (letters.hasOwnProperty(letter)) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
}