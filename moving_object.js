(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(pos, vel, side, color) {
    this.pos = pos;
    this.vel = vel;
    this.side = side;
    this.color = color;
    this.bounce_window = 0;
  }

  MovingObject.prototype.move = function(maxX, maxY) {
    if (this.bounce_window > 0) {
      this.bounce_window -= 1;
    }
    this.pos[0] += this.vel[0];
    if (this.pos[0] < 0) {
      this.pos[0] += maxX;
    } else if (this.pos[0] > maxX) {
      this.pos[0] -= maxX;
    }

    this.pos[1] += this.vel[1];
    if (this.pos[1] < 0) {
      this.pos[1] += maxY;
    } else if (this.pos[1] > maxY) {
      this.pos[1] -= maxY;
    }

  }

  MovingObject.prototype.draw = function(img, ctx) {
    ctx.fillStyle = this.color;

    ctx.drawImage(
      img,
      this.pos[0],
      this.pos[1],
      this.side,
      this.side
    );

    ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    dX = this.pos[0] - otherObject.pos[0];
    dY = this.pos[1] - otherObject.pos[1];
    distance = Math.pow(Math.pow(dX,2) + Math.pow(dY, 2), 0.5);


    if ((this.bounce_window === 0) && (distance <= (this.side/2 + otherObject.side/2))) {
      // console.log("true");
      return true;
    }
    // console.log("true");
    return false;
  }
})(this);