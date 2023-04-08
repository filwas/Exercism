//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.data = []
  }


  write(number) {
    if (this.data.length >= this.size) {throw new BufferFullError()}
    else {this.data.push(number)}
  }

  read() {
    if (this.data.length == 0) {throw new BufferEmptyError()}
    else return this.data.shift().toString();
  }

  forceWrite(number) {
    if (this.data.length < this.size) {this.write(number)}
    else {
      this.data.shift();
      this.data.push(number);
    }
  }

  clear() {
    this.data.pop();
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super();
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super();
  }
}
