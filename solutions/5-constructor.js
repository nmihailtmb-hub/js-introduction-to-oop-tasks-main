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

export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

export function reverse(segment) {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();
  
  const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
  const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
  
  return new Segment(newBeginPoint, newEndPoint);
}
// END