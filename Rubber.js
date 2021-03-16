class Rubber {
    constructor(x, y, radius, color) {
        var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.color = color;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.radius);
        pop();
      }
}