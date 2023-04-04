//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(a, b) {
    if (b<0 && a>0) {
      a*=-1;
      b*=-1;
    }
    this._a = a;
    this._b = b;
  }

  get a(){
    return this._a
  }
  get b(){
    return this._b
  }
  add(that) {
    let newA = (this.a*that.b) + (that.a*this.b);
    let newB = this.b*that.b;
    return new Rational(newA, newB).reduce();
  }

  sub(that) {
    let newA = (this.a*that.b) - (that.a*this.b);
    let newB = this.b*that.b;
    return new Rational(newA, newB).reduce();
  }

  mul(that) {
    let newA = this.a*that.a
    let newB = this.b*that.b;
    return new Rational(newA, newB).reduce();
  }

  div(that) {
    if (that.a == 0) throw new Error("division by zero")
    let newA = this.a*that.b;
    let newB = this.b*that.a;
    return new Rational(newA, newB).reduce();
  }

  abs() {
    let newA = this.a < 0 ? this.a*-1 : this.a;
    let newB = this.b < 0 ? this.b*-1 : this.b;
    return new Rational(newA, newB).reduce();
  }

  exprational(n) {
    let newA = this.a**n;
    let newB = this.b**n;
    return n < 0 ? new Rational(-newB, -newA).reduce() : new Rational(newA, newB).reduce();
  }

  expreal(x) {
    return parseFloat(Math.pow(x**this.a, 1/this.b).toPrecision(3))
  }

  reduce() {
    let newA = this.a;
    let newB = this.b;
    while (newB != 0) {
      let t = newB;
      newB = newA%newB;
      newA = t
    }
    return new Rational(this.a/newA, this.b/newA)
  }
}
