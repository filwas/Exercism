//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {

  var inputArray = input.split("\n")
  var rows = (inputArray.length)/4
  var cols = (inputArray[0].length)/3 
  var numberLine = ""
  
  for (let r = 0; r < rows; r++) {
    for (let c = 1; c <= cols; c++) {
      let slice1 = inputArray[4*r].slice((c-1)*3, (c-1)*3+3) 
      let slice2 = inputArray[4*r+1].slice((c-1)*3, (c-1)*3+3) 
      let slice3 = inputArray[4*r+2].slice((c-1)*3, (c-1)*3+3)
      let number = slice1+slice2+slice3
      number = number.replaceAll(/\S/g,"1").replaceAll(/\s/g, "0")
      numberLine += NUMHC.get(number) == undefined ? "?" : NUMHC.get(number)
    }
    numberLine += r+1 < rows ? "," : ""
  }

  return numberLine
}


const NUMHC = new Map([
  ["010101111", 0],
  ["000001001", 1],
  ["010011110", 2],
  ["010011011", 3],
  ["000111001", 4],
  ["010110011", 5],
  ["010110111", 6],
  ["010001001", 7],
  ["010111111", 8],
  ["010111011", 9]
])