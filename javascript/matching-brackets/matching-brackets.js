//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  input = input.replace(/[^\[\]\{\}\(\)]/g,"")
  var bracketsMap = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ]);
  var bracketsArray = []
  for (const char of input) {
    if (char == "[" || char == "{" || char == "(") {
      bracketsArray.push(char)
    } else if (char == "]" || char == "}" || char == ")") {
      if (bracketsMap.get(bracketsArray[bracketsArray.length-1]) == char) {
        bracketsArray.pop()
      } else {
        return false
      }
    }
  }
  return bracketsArray.length > 0 ? false : true  
};
