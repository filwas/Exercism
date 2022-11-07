//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  word = word.toLowerCase();
  var retArr = []
  var lettersObject = letterObject(word);
  for (var candidate of candidates) {
    if (word == candidate.toLowerCase()) continue; 
    var candidateLetters = letterObject(candidate.toLowerCase())
    var candidateKeys = Object.keys(candidateLetters)
    for (var i = 0; i < candidateKeys.length; i++) {
      let currentLetter = candidateKeys[i]
      if (!(lettersObject[currentLetter] == candidateLetters[currentLetter])) break
    }
    if (i == candidateKeys.length) {retArr.push(candidate)}
  }
  return retArr
};

export const letterObject = (word) => {
  var letters = {}
  for (const letter of word) {
    if (letters.hasOwnProperty(letter)) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
}