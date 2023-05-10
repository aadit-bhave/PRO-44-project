class Pebble {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true
    };

    this.w = w;
    this.h = h;

    this.body = Bodies.rectangle(x, y, this.w, this.h, options);

    this.image = loadImage("./assets/pebble-removebg-preview.png");

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }


  force() {
  Matter.Body.applyForce(this.body,{x:0,y:0}, {x:0.3,y:0.3})
}

}