//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { log } from "console";

const COLOURS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export class ResistorColorTrio {
  constructor(colorBand) {
    this.first = COLOURS.findIndex(e => e == colorBand[0])
    this.second = COLOURS.findIndex(e => e == colorBand[1])
    this.zeroes = COLOURS.findIndex(e => e == colorBand[2])
    if (this.first < 0 || this.second < 0 || this.zeroes < 0) throw new Error(/invalid color/)
    this.label = this.label();
  }

  label() {
    let value = parseInt(""+this.first+this.second+"".padEnd(this.zeroes, "0"));
    let unit = value >= 1000 ? "kiloohms" : "ohms";
    value = value >= 1000 ? value/1000 : value;
    
    return `Resistor value: ${value} ${unit}`
  }
}
