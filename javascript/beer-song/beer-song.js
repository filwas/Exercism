//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  var verses = []
  for (let i = initialBottlesCount; i > initialBottlesCount - takeDownCount; i--) {
    let count = i;
    let s = "s";
    let one = "one"
    let lastVerse = "";
    switch (i) {
      case 2:
        lastVerse = `1 bottle`;
        break;
      case 1:
        s = ""
        one = "it"
        lastVerse = `no more bottles`
        break;
      case 0:
        verses.push(`No more bottles of beer on the wall, no more bottles of beer.`);
        verses.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
        verses.push("")
        continue;
      default:
        lastVerse = `${i-1} bottles`
        break;
    }
    verses.push(`${count} bottle${s} of beer on the wall, ${count} bottle${s} of beer.`);
    verses.push(`Take ${one} down and pass it around, ${lastVerse} of beer on the wall.`);
    verses.push("")
  }
  verses.pop();
  return verses
};
