export default class Time {
  // BEGIN
  static fromString(stroka) {
    const [chasy, minuty] = stroka.split(':').map(Number);
    return new Time(chasy, minuty);
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}