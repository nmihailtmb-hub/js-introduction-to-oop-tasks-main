// BEGIN
function make(chisl = 0, znam = 1) {
  return {
    chisl,
    znam,
    setNumer(value) {
      this.chisl = value;
    },
    setDenom(value) {
      this.znam = value;
    },
    getNumer() {
      return this.chisl;
    },
    getDenom() {
      return this.znam;
    },
    toString() {
      return `${this.chisl}/${this.znam}`;
    },
    add(drugayaDrob) {
      
      const novChisl = this.chisl * drugayaDrob.getDenom() + drugayaDrob.getNumer() * this.znam;
      const novZnam = this.znam * drugayaDrob.getDenom();
      return make(novChisl, novZnam);
    },
  };
}
// END

export default make;