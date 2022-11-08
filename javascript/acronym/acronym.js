//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const TOWHITESPACE = [",", "-", "_"]
const TONOTHING = ["'"]
export const parse = (text = "") => {
  for (const sign of TOWHITESPACE) {
    text = text.replace(sign, " ")
  }

  for (const sign of TONOTHING) {
    text = text.replace(sign, "")
  }

  var returnString = ""
  var wordsArray = text.trim().split(/\s+/)

  for (const word of wordsArray) {
    returnString += word.toUpperCase()[0]
  }
  return returnString;
};
