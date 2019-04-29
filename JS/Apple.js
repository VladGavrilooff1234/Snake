function Apple() {
  let x = getRandom(0, WIDTH_CANVAS);
  let y = getRandom(0, HEIGHT_CANVAS);
  this.coordinate = new Point(x, y);
  function getRandom(min, max) {
    let result = Math.round(Math.random() * (max - min) + min);
    let reminder = result % SNAKE_CELL_WIDTH;
    return result - reminder;
  }
  this.draw = function(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.coordinate.x,
      this.coordinate.y,
      SNAKE_CELL_WIDTH,
      SNAKE_CELL_WIDTH
    );
  };
}
