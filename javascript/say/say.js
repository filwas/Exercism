//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if(n<0 || n > 999999999999) throw new Error("Number must be between 0 and 999,999,999,999.");
  let numberString = n.toString();
  let numLen = numberString.length;
  let rest = numLen%3;
  if (rest != 0) numberString=numberString.padStart(numLen+3-rest,"0");
  let thousands = Math.floor(numberString.length/3-1);
  var retString = ""
  for (let i = 0; i <= thousands; i++) {
    let curString = numberString.slice(3*i, 3+3*i)
    if (parseInt(curString) == 0 && thousands != 0) continue;
    retString += fullHundreds(curString) + scale(thousands-i)+" "
  }
  return retString.trimEnd();
};

export function fullHundreds(numberString){
  let hundreds = parseInt(numberString[0]);
  let tens = parseInt(numberString[1]);
  let units = parseInt(numberString[2]);
  if (hundreds > 0) {
    return tens + units == 0 ? unitToWord(hundreds) + " hundred " : unitToWord(hundreds) + " hundred " +decimalPart(tens, units);
  } else return decimalPart(tens, units);

}

export function decimalPart(second, last){
  let number = second*10 + last;
  switch (true) {
    case number <= 9: return unitToWord(last);
    case number <= 19: return teens(number);
    case last == 0: return decimalToWord(second);
    default: return decimalToWord(second)+"-"+unitToWord(last);
  }
}

export function unitToWord(number){
  switch (number) {
    case 0: return "zero";
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    case 4: return "four";
    case 5: return "five";
    case 6: return "six";
    case 7: return "seven";
    case 8: return "eight";
    case 9: return "nine";
  }
}

export function decimalToWord(number){
  switch (number) {
    case 2: return "twenty";
    case 3: return "thirty";
    case 4: return "forty"
    case 5: return "fifty";
    case 8: return "eighty";
    default: return unitToWord(number)+"ty"
  }
}

export function teens(number){
  switch (number){
    case 10: return "ten";
    case 11: return "eleven";
    case 12: return "twelve";
    case 13: return "thirteen";
    case 14: return "fourteen";
    case 15: return "fifteen";
    case 16: return "sixteen";
    case 17: return "seventeen";
    case 18: return "eighteen";
    case 19: return "nineteen";
  }
}

export function scale(number){
  switch (number) {
    case 0: return ""
    case 1: return " thousand"
    case 2: return " million"
    case 3: return " billion"
  }
}