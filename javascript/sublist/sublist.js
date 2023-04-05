//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(input) {
    this._list = input == undefined ? "" : input.join(" ");
  }

  get list(){
    return this._list;
  }

  compare(that) {
    let isSublist = that.list.includes(this.list);
    let isSuperlist = this.list.includes(that.list);
    switch (true) {
      case isSublist && isSuperlist: return "EQUAL";
      case isSublist : return "SUBLIST";
      case isSuperlist: return "SUPERLIST"; 
      default: return "UNEQUAL";
    }
    
  }
}
