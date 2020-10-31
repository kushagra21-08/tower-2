class Bird {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        'isStatic': false
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    World.add(world, this.body);

    this.img = loadImage('img/hexagon.png');
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    noStroke();
    fill("yellow");
    imageMode(CENTER);
    image(this.img,0,0,70,70);
    ellipse( 0, 0,this.radius,this.radius );
    pop();
  }
}