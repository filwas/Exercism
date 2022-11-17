//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Forth {
  constructor() {
    this._stack = []
    this["+"] = this.add
    this["+String"] = "+"
    this["-"] = this.subtract
    this["-String"] = "-"
    this["*"] = this.mutltiply
    this["*String"] = "*"
    this["/"] = this.divide
    this["/String"] = "/"
    this["dup"] = this.dup
    this["dupString"] = "dup"
    this["drop"] = this.drop
    this["dropString"] = "drop"
    this["swap"] = this.swap
    this["swapString"] = "swap"
    this["over"] = this.over
    this["overString"] = "over"
  }

  evaluate(string) {
    let array = string.split(" ")
    for (let index = 0; index < array.length; index++) {
      let character = array[index].toLowerCase()
	    if (isNaN(character)) {
	      if(character == ":") {this.define(array); break;}
        else if (Object.hasOwn(this, character)) {this[character]()}
        else throw new Error('Unknown command')
	    } else {
        this._stack.push(parseInt(character))
	    }
    }
    return this.stack[0]
  }

  get stack() {
    return this._stack
  }

  add() {
    let value1 = this._stack.pop()
    let value2 = this._stack.pop()
    if (value1 == undefined || value2 == undefined) throw new Error('Stack empty')
    this._stack.push(value1+value2)
    return value1+value2
  }

  subtract(){
    let value1 = this._stack.pop()
    let value2 = this._stack.pop()
    if (value1 == undefined || value2 == undefined) throw new Error('Stack empty')
    this._stack.push(value2-value1)
    return value2-value1
  }

  mutltiply(){
    let value1 = this._stack.pop()
    let value2 = this._stack.pop()
    if (value1 == undefined || value2 == undefined) throw new Error('Stack empty')
    this._stack.push(value2*value1)
    return value2*value1
  }

  divide(){
    let value1 = this._stack.pop()
    let value2 = this._stack.pop()
    if (value1 == undefined || value2 == undefined) throw new Error('Stack empty')
    if(value1 == 0) throw new Error('Division by zero');
    this._stack.push(Math.floor(value2/value1))
    return Math.floor(value2/value1)
  }

  dup(){
    let value = this._stack.pop()
    if (value == undefined) throw new Error('Stack empty')
    this._stack.push(value, value)
    return value
  }

  drop(){
    let value = this._stack.pop()
    if (value == undefined) throw new Error('Stack empty')
    return value
  }

  swap(){
    let value1 = this._stack.pop()
    let value2 = this._stack.pop()
    if (value1 == undefined || value2 == undefined) throw new Error('Stack empty')
    this._stack.push(value1, value2)
    return value2
  }

  over(){
    let value1 = this._stack.pop()
    let value2 = this._stack.pop()
    if (value1 == undefined || value2 == undefined) throw new Error('Stack empty')
    this._stack.push(value2, value1, value2)
    return value2
  }

  define(actions){
    actions.pop(); actions.shift();
    let name = actions.shift().toLowerCase()
    if (!isNaN(name)) throw new Error('Invalid definition')
    let actionString = []
    actions.forEach(action => {
      if (Object.hasOwn(this, action)){
        actionString.push(this[action+"String"])
      } else{
       actionString.push(action)
      }
    });
    actionString = actionString.join(" ")
    this[name+"String"] = actionString
    this[name] = function() {
      this.evaluate(actionString)
      return actionString
    }
  }
}
