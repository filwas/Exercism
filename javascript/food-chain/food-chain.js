//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  verse(length) {
    var verse = []

    for (let i = 0; i < length; i++) {
      var prevAnimal = this.CHAIN[i-1]
      var animal = this.CHAIN[i]
      var wriggled = `wriggled and jiggled and tickled inside her`
      var swallow = `to swallow a ${animal}!`
      var swallowed = `swallowed a ${animal}!`


      if (i == 0) verse.unshift(`I don't know why she swallowed the ${animal}. Perhaps she'll die.\n`)      

      if (i == 2) prevAnimal += ` that ` + wriggled      

      if (i != 0) verse.unshift(`She swallowed the ${animal} to catch the ${prevAnimal}.`)
    }  

    switch (length) {
      case 2: verse.unshift(`It ` + wriggled + `.`); break;
      case 3: verse.unshift(`How absurd ` + swallow); break;
      case 4: verse.unshift(`Imagine that, ` + swallow); break;
      case 5: verse.unshift(`What a hog, ` + swallow); break;
      case 6: verse.unshift(`Just opened her throat and ` + swallowed); break;
      case 7: verse.unshift(`I don't know how she ` + swallowed); break;
      case 8: verse = [`She's dead, of course!\n`]; break;
    }

    verse.unshift(`I know an old lady who ` + swallowed.replace("!", "\."))
    verse = verse.join("\n")

    return verse
  }

  verses(start, end) {
    let song = []
    for (let i = start; i <= end; i++) {
      let verse = this.verse(i)
      song.push(verse)
    }
    song = song.join("\n") + `\n`
    console.log(song);
    return song
  }

  CHAIN = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"]
}
