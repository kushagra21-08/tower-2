const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,engine ;
var ground1 ,ground2;
var sling;
var gs,ls;

var f1top1,f1top2,f1top3,f1top4,f1top5,f1top6;
var f2top1,f2top2,f2top3,f2top4,f2top5;
var f3top1,f3top2,f3top3,f3top4;
var f4top1,f4top2,f4top3;
var f5top1,f5top2;
var f6top1;

var s1top1,s1top2,s1top3;
var s2top1,s2top2;
var s3top1;

function setup() {
  createCanvas(1800,800);

  gs = "onSling" ;
  ls = "no";
  engine = Engine.create();
	world = engine.world;

  ball = new Bird(160,650,25);
  ground1 = new Ground(640,550,300,10);
  ground2 = new Ground(1220,405,150,10);

  f1top1= new Top1(515,470,50,50);
  f1top2= new Top1(565,470,50,50);
  f1top3= new Top1(615,470,50,50);
  f1top4= new Top1(665,470,50,50);
  f1top5= new Top1(715,470,50,50);
  f1top6= new Top1(765,470,50,50);

  f2top1= new Top2(540,370,50,50);
  f2top2= new Top2(590,370,50,50);
  f2top3= new Top2(640,370,50,50);
  f2top4= new Top2(690,370,50,50);
  f2top5= new Top2(740,370,50,50);

  f3top1= new Top3(565,270,50,50);
  f3top2= new Top3(565+50,270,50,50);
  f3top3= new Top3(565+100,270,50,50);
  f3top4= new Top3(565+150,270,50,50);

  f4top1= new Top1(540+50,170,50,50);
  f4top2= new Top1(540+100,170,50,50);
  f4top3= new Top1(540+150,170,50,50);

  f5top1= new Top2(615,70,50,50);
  f5top2= new Top2(615+50,70,50,50);

  f6top1= new Top3(640,10,50,50);



  s1top1= new Top1(1170,170,50,50);
  s1top2= new Top1(1170+50,170,50,50);
  s1top3= new Top1(1170+100,170,50,50);

  s2top1= new Top2(1195,70,50,50);
  s2top2= new Top2(1195+50,70,50,50);

  s3top1= new Top3(1220,20,50,50);


  sling = new SlingShot(ball.body,{ x : 200 , y : 570});

  Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);

  f1top1.display();
  f1top2.display();
  f1top3.display();
  f1top4.display();
  f1top5.display();
  f1top6.display();

  f2top1.display();
  f2top2.display();
  f2top3.display();
  f2top4.display();
  f2top5.display();

  f3top1.display();
  f3top2.display();
  f3top3.display();
  f3top4.display();

  f4top1.display();
  f4top2.display();
  f4top3.display();

  f5top1.display();
  f5top2.display();

  f6top1.display();



  s1top1.display();
  s1top2.display();
  s1top3.display();

  s2top1.display();
  s2top2.display();

  s3top1.display();


   sling.display();
  ground1.display();
  ground2.display();
  ball.display();
  
}

function mouseDragged(){
  if(gs === "onSling"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  sling.fly();
  gs = "ofSling";
  ls = "yes";
}

function keyPressed (){
  if(keyCode === 32){
   Matter.Body.setPosition(ball.body, {x: 160 , y: 650});
  sling.attach(ball.body);
  gs = "onSling";
  }
}