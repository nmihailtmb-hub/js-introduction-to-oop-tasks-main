// BEGIN
const make = (numer = 0, denom = 1) => ({
  numer,
  denom,
  
  setNumer(newNumer) {
    this.numer = newNumer;
  },
  
  setDenom(newDenom) {
    this.denom = newDenom;
  },
  
  getNumer() {
    return this.numer;
  },
  
  getDenom() {
    return this.denom;
  },
  
  toString() {
    return `${this.numer}/${this.denom}`;
  },
  
  add(other) {
    const newNumer = this.numer * other.getDenom() + this.denom * other.getNumer();
    const newDenom = this.denom * other.getDenom();
    return make(newNumer, newDenom);
  }
});

export default make;
// END