function Snake(x, y) {
  this.data = [];
  this.length = SNAKE_LENGTH;
  this.direction = direction;
  // изменяем координаты змейки
  this.currentPoint = new Point(0, 0);
  this.move = function(apple) {
    while (this.data.length <= this.length) {
      this.currentPoint = Direction(
        currentDirection,
        this.currentPoint.x,
        this.currentPoint.y
      );
      this.data.push(this.currentPoint);
    }
    this.data.shift();
  };
  this.collide = function(apple) {
    if (this.data[this.data.length - 1].equals(apple.coordinate)) {
      this.length++;
      return true;
    } else {
      return false;
    }
  };
  this.SameCoordinate = function() {
    for (var i = 0; i <= this.length; i++) {
      if (this.data[this.data.length - 1].equals(this.data[i])) {
        this.length = 5;
        return true;
      } else {
        return false;
      }
    }
  };

  // отображает змейку в canvas
  this.draw = function(ctx) {
    this.data.forEach(point => {
      ctx.fillStyle = "white";
      ctx.fillRect(
        point.x,
        point.y,
        SNAKE_CELL_WIDTH - 1,
        SNAKE_CELL_WIDTH - 1
      );
    });
  };
  // возвращает true если в this.data нет дубликатов или false  в противном случае
  this.isValid = function() {
    if (this.data[0][0] == WIDTH_CANVAS) {
      return false;
    }
    return true;
  };
}
