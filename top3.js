class Top3 {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
      
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
    //this.img = loadImage("img/green.png");
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    
      if(this.body.speed > 5 && ls === "yes"){
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       //image(this.img, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
     else{
       push();
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
     }
  }
};
