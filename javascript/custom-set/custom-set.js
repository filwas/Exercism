//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(data) {
    this._data = data == undefined ? [] : data;
  }

  get data() {
    return this._data;
  }

  empty() {
    return this.data.length == 0 ? true : false;
  }

  contains(number) {
    return this.data.includes(number);
  }

  add(number) {
    if (!this.contains(number)) {this._data.push(number)}
    return this
  }

  subset(that) {
    let thisString = this.data.join(" ")
    let thatString = that.data.join(" ")
    return thatString.includes(thisString) ? true : false;
  }

  disjoint(that) {
    let retValue = true;
    this.data.forEach(e => {
      if (that.contains(e)) retValue = false;
    });
    return retValue;
  }

  eql(that) {
    let thisData = this.data.sort().join(" ")
    let thatData = that.data.sort().join(" ")

    return thisData == thatData ? true : false;
  }

  union(that) {
    this.data.forEach(e => {
      that.add(e)
    });
    return that
  }

  intersection(that) {
    let inter = new CustomSet();
    this.data.forEach(e => {
      if (that.contains(e)) {inter.add(e)}
    });
    return inter
  }

  difference(that) {
    let diff = new CustomSet();
    this.data.forEach(e => {
      if (!that.contains(e)) {diff.add(e)}
    });
    return diff;
  }
}
