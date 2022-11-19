//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static verse(length) {
    var verse = []
    var house = `the house that Jack built.`
    for (let i = 0; i < length; i++) {
      try {var what = LYR[i][1]} catch{}
      try {var who = LYR[i-1][0]} catch{}

      if (i == 0 &&  length == 1) {
        verse.unshift(`This is `+house)
        break;
      } else if (i==0) {
        verse.unshift(`that ${what} in ${house}`)
      } else if (i != length-1) {
        verse.unshift(`that ${what} the ${who}`)
      } else {
        verse.unshift(`This is the ${who}`)
      }
    }

    return verse
  }

  static verses(start, end) {
    let verses = []
    for (let i = start; i <= end; i++) {
      let verse = House.verse(i)
      verses = i == start ? [...verse] : [...verses, "", ...verse]
    }
    
    return verses
  }
  
}

  const LYR = [
    ["malt", "lay"],
    ["rat", "ate"],
    ["cat", "killed"],
    ["dog", "worried"],
    ["cow with the crumpled horn", "tossed"],
    ["maiden all forlorn", "milked"],
    ["man all tattered and torn", "kissed"],
    ["priest all shaven and shorn", "married"],
    ["rooster that crowed in the morn", "woke"],
    ["farmer sowing his corn", "kept"],
    ["horse and the hound and the horn", "belonged to"]
  ]

