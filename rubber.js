class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':5,
          'density':2.0
      }
      this.x = x
      this.y = y
      this.r = radius
      this.body = Bodies.circle(this.x,this.y, this.r, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4)
      stroke("green")
      fill(255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  