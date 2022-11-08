//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SHARPSCALE = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
const FLATSCALE = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
const SHARPTONICS = ['C', 'a', 'G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#']


export class Scale {
  constructor(tonic) {
    this.sharpFlat = SHARPTONICS.includes(tonic)
    tonic = tonic.length == 1 ? tonic.toUpperCase() : tonic[0].toUpperCase()+tonic[1] 
    this.tonicIndex = this.sharpFlat ? SHARPSCALE.indexOf(tonic) : FLATSCALE.indexOf(tonic)
    this._scale = this.sharpFlat ? SHARPSCALE.concat(SHARPSCALE) : FLATSCALE.concat(FLATSCALE)
    this._scale = this._scale.slice(this.tonicIndex, this.tonicIndex+12)

  }

  chromatic() {
    return this._scale
  }

  interval(intervals) {
    var iterator = 0
    var intervalArray = [this._scale[iterator]]
    for (const letter of intervals) {
      switch (letter) {
        case "m":
          iterator++
          intervalArray.push(this._scale[iterator])
          break;
        case "M":
          iterator += 2
          intervalArray.push(this._scale[iterator])
          break;
        case "A":
          iterator += 3
          intervalArray.push(this._scale[iterator])
          break;
      }
      
    }
    return intervalArray
  }
}
