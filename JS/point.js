function Point(x, y) {
  this.x = x;
  if (x >= WIDTH_CANVAS) {
    this.x = x % WIDTH_CANVAS;
  } else if (x < 0) {
    this.x = x + WIDTH_CANVAS;
  }
  this.y = y;
  if (y >= HEIGHT_CANVAS) {
    this.y = y % HEIGHT_CANVAS;
  } else if (y < 0) {
    this.y = y + HEIGHT_CANVAS;
  }
  this.equals = function(point) {
    return this.x == point.x && this.y == point.y;
  };
}
Point.prototype.write = function() {
  console.log("great!");
};
