const SPEED = 20;
const WIDTH_CANVAS = 600;
const HEIGHT_CANVAS = 400;
const SNAKE_CELL_WIDTH = 20;
const SNAKE_LENGTH = 5;

var snake = [],
  apple = [];

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
}
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

function Apple(apple) {
  this.x = getRandom(0, WIDTH_CANVAS);
  this.y = getRandom(0, HEIGHT_CANVAS);
  this.draw = function(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, SNAKE_CELL_WIDTH, SNAKE_CELL_WIDTH);
  };
  apple.push(this.x, this.y);
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
// x - number; это начальное положение змейки по x. x >= 0 and x <= WIDTH_CANVAS
// y - number; это начальное положение змейки по y, y >=0 and y <= HEIGHT_CANVAS
// direction - string; главное направление движения всей змейки

function Snake(x, y, direction, snake) {
  this.data = [];
  this.length = 5;
  this.direction = direction;
  // изменяем координаты змейки
  this.currentPoint = new Point(10, 10);
  this.move = function() {
    while (this.data.length <= this.length) {
      this.currentPoint = Direction(
        currentDirection,
        this.currentPoint.x,
        this.currentPoint.y
      );
      this.data.push(this.currentPoint);
      snake.push(this.currentPoint);
    }
    this.data.shift();
    snake.shift();
    if (SnakeEatApples(x, y, SNAKE_CELL_WIDTH, SNAKE_LENGTH, SPEED) == true) {
      this.length++;
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
  (function(apple) {
    setInterval(function() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 800, 800);
      sn1.move();
      sn1.draw(ctx);
      apple.draw(ctx);
    }, 100);
  })(apple);
}

function SnakeEatApples(snake, apple, SNAKE_CELL_WIDTH, SNAKE_LENGTH, SPEED) {
  this.data = [];

  while (SNAKE_LENGTH >= 5) {
    if (snake[0] == apple[0] && snake[1] == apple[0]) {
      snake.push(apple);
      SNAKE_LENGTH++;
      return true;
    } else {
      return false;
    }
  }
}

function rand(min, max) {
  k = Math.floor(Math.random() * (max - min) + min);
  return Math.round(k / s) * s;
}
