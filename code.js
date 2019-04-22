const SPEED = 20;
const WIDTH_CANVAS = 600;
const HEIGHT_CANVAS = 400;
const SNAKE_CELL_WIDTH = 20;
const SNAKE_LENGTH = 5;

var apples = [];

//TODO: put all classes to new files
//TODO: write a function inside of the Snake class that will return true if there are 2 points with the same coordinates or false otherwise;

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
function Direction(key, x, y) {
  switch (key) {
    case "ArrowUp":
      return new Point(x, y - SNAKE_CELL_WIDTH);
    case "ArrowDown":
      return new Point(x, y + SNAKE_CELL_WIDTH);
    case "ArrowRight":
      return new Point(x + SNAKE_CELL_WIDTH, y);
    case "ArrowLeft":
      return new Point(x - SNAKE_CELL_WIDTH, y);
    default:
      break;
  }
}

function Apple() {
  let x = getRandom(0, WIDTH_CANVAS);
  let y = getRandom(0, HEIGHT_CANVAS);
  this.coordinate = new Point(x, y);

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
function getRandom(min, max) {
  let result = Math.round(Math.random() * (max - min) + min);
  let reminder = result % SNAKE_CELL_WIDTH;
  return result - reminder;
}
// x - number; это начальное положение змейки по x. x >= 0 and x <= WIDTH_CANVAS
// y - number; это начальное положение змейки по y, y >=0 and y <= HEIGHT_CANVAS
// direction - string; главное направление движения всей змейки

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
function Game(canvasId) {
  let sn1 = new Snake(WIDTH_CANVAS / 2, HEIGHT_CANVAS / 2);

  let apple = new Apple();
  apples.push(apple);

  (function(apple) {
    setInterval(function() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 800, 800);
      sn1.move(apple);
      if (sn1.collide(apple)) {
        apple = new Apple();
        apple.coordinate.write();
      }
      sn1.draw(ctx);
      apple.draw(ctx);
    }, 100);
  })(apple);
}

function rand(min, max) {
  k = Math.floor(Math.random() * (max - min) + min);
  return Math.round(k / s) * s;
}
