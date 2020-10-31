class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB ;
    }
    fly() {
        this.sling.bodyA = null ;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        push();
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("cyan")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    
}