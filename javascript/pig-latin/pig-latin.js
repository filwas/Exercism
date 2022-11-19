//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (input) => {
  var wordArray = input.split(" ")
  let returnArray = []

  wordArray.forEach(word => {

    var [a, b, c, ...d] = word
    var vowelCheck = ("eioua".includes(a) || a+b == "xr" || a+b == "yt") ? true : false
    var twoLetterCheck = ['ch', 'th', 'qu', 'rh'].includes(a+b) ? true : false
    var threeLetterCheck = ['thr', 'sch'].includes(a+b+c) ? true : false
    var quCheck = b+c == "qu" ? true : false

    if (vowelCheck) {
      returnArray.push(word+"ay")
    } else if (threeLetterCheck || quCheck) {
      returnArray.push([...d, a, b, c].join("")+"ay")      
    } else if (twoLetterCheck){
      returnArray.push([c, ...d, a, b].join("")+"ay")
    } else {
      returnArray.push([b, c, ...d, a].join("")+"ay")
    }
  });

  return returnArray.join(" ")
};