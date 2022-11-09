//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (string, series) => {
  
  switch (true) {
    case (series > string.length): throw new Error('Span must be smaller than string length')
    case (/\D/.test(string)): throw new Error('Digits input must only contain digits')
    case (series < 0): throw new Error('Span must be greater than zero')
    case (series == 0): return 1;
  }

  string = string.split("")
  string.forEach((e, i, a) => {
    a[i] = Number(e)
  });
  let lastBiggest = 0
  for (let i = 0; i < string.length; i++) {
    if (i+series <= string.length) {
      let newBiggest = string.slice(i, i+series).reduce((p, c) => p*c)
      lastBiggest = newBiggest > lastBiggest ? newBiggest : lastBiggest
    }    
  }
  return lastBiggest
};
