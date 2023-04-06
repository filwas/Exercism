//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(data) {
    this._data = data;
    this._right = null;
    this._left = null;
  }

  get data() {
    return this._data;
  }
  get right() {
    return this._right;
  }
  set right(data) {
    this._right = new BinarySearchTree(data);
  }
  get left() {
    return this._left;
  }
  set left(data) {
    this._left = new BinarySearchTree(data);
  }

  insert(newData) {
    if (this._data < newData) {
      if (this.right == null) {
        this.right = newData
      } else {
        this.right.insert(newData)
      }
    } else {
      if (this.left == null) {
        this.left = newData
      } else {
        this.left.insert(newData)
      }
    }
  }

  each(callback) {
    let left = this.left == null ? false : true;
    let right = this.right == null ? false : true;

    switch (true) {
      case left && right:
        this.left.each(callback);
        callback(this.data);
        this.right.each(callback);
        break;
      case left && right == false: 
        this.left.each(callback);
        callback(this.data);
        break;
      case right && left == false:
        callback(this.data);
        this.right.each(callback);
        break;
      default:
        callback(this.data);
        break;
    }

  }
}
