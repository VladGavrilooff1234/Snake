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
