//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (input) => {
  var dominoes = [...input];
  let fullLen = dominoes.length;
  if (fullLen == 0) return []
  let retDominoes = [];

  retDominoes.push(dominoes.shift());
  dominoes.sort((a, b) => (b[0]+b[1]) - (a[0]+a[1]))
  let rest = dominoes.flat();

  for (let i = 0; i < fullLen-1; i++) {
    let currLen = retDominoes.length;
    let lastNumber = retDominoes[currLen-1][1];
  
    let possibleDoublets = dominoes.filter(e => e[0] == lastNumber && e[0] == e[1]);
    if (possibleDoublets.length>0) {
      let doublet = possibleDoublets.pop();
      dominoes.splice(dominoes.findIndex(e => e == doublet), 1);
      retDominoes.push(doublet);
      continue;
    }

    let nextPosition = rest.findIndex(e => e == lastNumber);
    if (nextPosition == -1) return null

    if (nextPosition % 2 != 0) {
      nextPosition--;
      dominoes[nextPosition/2].reverse()
    }

    retDominoes.push(dominoes.splice(nextPosition/2, 1).flat())
    rest = dominoes.flat()
  }

  if (retDominoes[0][0] != retDominoes[fullLen-1][1]) return null
  return retDominoes;
};