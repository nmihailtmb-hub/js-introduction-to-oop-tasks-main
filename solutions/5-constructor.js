// BEGIN
export function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

export function Segment(nachalo, konec) {
  this.beginPoint = nachalo;
  this.endPoint = konec;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

export const reverse = (otrezok) => {
  const staryNachalo = otrezok.getBeginPoint();
  const staryKonec = otrezok.getEndPoint();
  const novNachalo = new Point(staryKonec.getX(), staryKonec.getY());
  const novKonec = new Point(staryNachalo.getX(), staryNachalo.getY());
  return new Segment(novNachalo, novKonec);
};
// END