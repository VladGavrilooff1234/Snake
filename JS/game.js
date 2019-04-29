function Game(canvasId) {
  let sn1 = new Snake(WIDTH_CANVAS / 2, HEIGHT_CANVAS / 2);
  let apple = new Apple();
  console.log(sn1);

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
      sn1.SameCoordinate();
      sn1.draw(ctx);
      apple.draw(ctx);
    }, 100);
  })(apple);
}
