//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (input) => {
  var number = input.replace(/\D/g, "")
  var len = number.length
  if (/\@\:\!/.test(input)) throw new Error('Punctuations not permitted')
  if (/[A-z]/.test(input)) throw new Error('Letters not permitted')
  if (len < 10) throw new Error('Incorrect number of digits')
  if (len == 11) {
    if (number[0]==1) {
      number = number.slice(1)
    } else {
      throw new Error('11 digits must start with 1')
    }
  } else if (len > 11) throw new Error('More than 11 digits') 

  let areaCode = Number(number[0])
  let exchangeCode = Number(number[3])

  if (areaCode == 0 || areaCode == 1) throw new Error(`Area code cannot start with ${areaCode == 0 ? "zero" : "one"}`)
  if (exchangeCode == 0 || exchangeCode == 1) throw new Error(`Exchange code cannot start with ${exchangeCode == 0 ? "zero" : "one"}`)

  return number
};
